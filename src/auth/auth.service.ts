import { BadRequestException, ForbiddenException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign-in.dto';
import { CustomerService } from '../customer/customer.service';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { Customer } from '../customer/model/customer.model';
import { Admin } from '../admin/model/admin.model';
import { AdminService } from '../admin/admin.service';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { Response } from 'express';



@Injectable()
export class AuthService {
  constructor(
    private readonly CustomerService: CustomerService,
    private readonly jwtService: JwtService,
    private readonly customService: CustomerService,
    private readonly adminService: AdminService
  ) {}


  private async generateTokenCustomer(customer: Customer) {
    const payload = {
      id: customer.id,
      email: customer.email
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY_CUSTOMER,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),

      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY_CUSTOMER,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async getTokenAdmin(admin: Admin) {
    const payload = {
      id: admin.id,
      email: admin.email,
      is_creator: admin.is_creator,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY_ADMIN,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),

      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY_ADMIN,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }


  async signUpCustomer(createCustomerDto: CreateCustomerDto) {
    const candidate = await this.customService.findCustomerByEmail(
      createCustomerDto.email
    );
    if (candidate) {
      throw new BadRequestException("Customer exists");
    }
    const hashedPassword = await bcrypt.hash(
      createCustomerDto.password,
      7
    );
    createCustomerDto.password = hashedPassword;
   
    const newCustomer = await this.customService.create(createCustomerDto);
    return this.generateTokenCustomer(newCustomer);
  }


  async signUpAdmin(createAdminDto: CreateAdminDto) {
    const candidate = await this.adminService.findAdminByEmail(
      createAdminDto.email
    );
    if (candidate) {
      throw new BadRequestException("Admin exists");
    }
    if (createAdminDto.password !== createAdminDto.confirm_password) {
      throw new BadRequestException("Parollar mos emas");
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
    createAdminDto.password = hashedPassword;
    const newAdmin = await this.adminService.create({...createAdminDto,});
    return this.getTokenAdmin(newAdmin);
  }



  async signInCustomer(signInDto: SignInDto,res: Response) {
    const customer = await this.customService.findCustomerByEmail(
      signInDto.email
    );
    if (!customer) {
      throw new UnauthorizedException("Email or password incorrect");
    }
    const isValidPassword = await bcrypt.compare(
      signInDto.password,
      customer.dataValues.hashed_password
    );
    if (!isValidPassword) {
      throw new UnauthorizedException("Email or password incorrect");
    }
    const tokens = await this.generateTokenCustomer(customer);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updateUser = await this.customService.updateRefreshToken(
      customer.id,
      hashed_refresh_token
    );
    if (!updateUser) {
      throw new InternalServerErrorException("Tokenni saqlashda xatolik");
    }

    res.cookie("refresh_token", tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: "Customer logged in",
      customerId: customer.id,
      access_token: tokens.access_token,
    };
    return response;
  }

  async signInAdmin(signInDto: SignInDto, res: Response) {
    const { email, password } = signInDto;
    const admin = await this.adminService.findAdminByEmail(
      email
    );
    if (!admin) {
      throw new UnauthorizedException("Email or password incorrect");
    }

    
    const isValidPassword = await bcrypt.compare(
      password,
      admin.dataValues.hashed_password
    );

    if (!isValidPassword) {
      throw new UnauthorizedException("Email or password incorrect");
    }

    const tokens = await this.getTokenAdmin(admin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updateUser = await this.adminService.updateRefreshToken(
      admin.id,
      hashed_refresh_token
    );
    if (!updateUser) {
      throw new InternalServerErrorException("Tokenni saqlashda xatolik");
    }

    res.cookie("refresh_token", tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: "Admin logged in",
      adminId: admin.id,
      access_token: tokens.access_token,
    };
    return response;
  }



  async signOutCustomer(refreshToken: string, res: Response) {
    const userData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY_CUSTOMER,
    });
    if (!userData) {
      throw new ForbiddenException("User not verified");
    }
    const hashed_refresh_token = null;
    await this.customService.updateRefreshToken(
      userData.id,
      hashed_refresh_token
    );
    res.clearCookie("refresh_token");
    const response = {
      message: "Customer logged out successfully",
    };
    return response;
  }

  async signOutAdmin(refreshToken: string, res: Response) {
    const userData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY_ADMIN,
    });
    if (!userData) {
      throw new ForbiddenException("User not verified");
    }
    const hashed_refresh_token = null;
    await this.adminService.updateRefreshToken(
      userData.id,
      hashed_refresh_token
    );
    res.clearCookie("refresh_token");
    const response = {
      message: "Admin logged out successfully",
    };
    return response;
  }

  async refreshTokenAdmin(adminId: number, refreshToken: string, res: Response) {
    const decodedToken = await this.jwtService.decode(refreshToken);
    if (adminId != decodedToken["id"]) {
      throw new ForbiddenException("Ruxsat etilmagan foydalanuvchi");
    }
    const admin = await this.adminService.findOne(adminId);

    if (!admin || !admin.dataValues.hashed_refresh_token) {
      throw new BadRequestException("admin not found");
    }
    const tokenMatch = await bcrypt.compare(
      refreshToken,
      admin.dataValues.hashed_refresh_token
    );
    const tokens = await this.getTokenAdmin(admin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updateUser = await this.adminService.updateRefreshToken(
      admin.id,
      hashed_refresh_token
    );
    if (!updateUser) {
      throw new InternalServerErrorException("Tokenni saqlashda xatolik");
    }

    res.cookie("refresh_token", tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: "Admin refreshed",
      adminId: admin.id,
      access_token: tokens.access_token,
    };
    return response;
  }
  
  async refreshTokenCustomer(customerId: number, refreshToken: string, res: Response) {
    const decodedToken = await this.jwtService.decode(refreshToken);
    if (customerId != decodedToken["id"]) {
      throw new ForbiddenException("Ruxsat etilmagan foydalanuvchi");
    }
    const customer = await this.customService.findOne(customerId);

    if (!customer || !customer.dataValues.hashed_refresh_token) {
      throw new BadRequestException("admin not found");
    }

    const tokenMatch = await bcrypt.compare(
      refreshToken,
      customer.dataValues.hashed_refresh_token
    );
    const tokens = await this.generateTokenCustomer(customer);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updateCustomer = await this.customService.updateRefreshToken(
      customer.id,
      hashed_refresh_token
    );
    if (!updateCustomer) {
      throw new InternalServerErrorException("Tokenni saqlashda xatolik");
    }

    res.cookie("refresh_token", tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: "Customer refreshed",
      customerId: customer.id,
      access_token: tokens.access_token,
    };
    return response;
  }
}



