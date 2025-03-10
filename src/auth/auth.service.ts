import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign-in.dto';
import { CustomerService } from '../customer/customer.service';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { Customer } from '../customer/model/customer.model';
import { Admin } from '../admin/model/admin.model';
import { AdminService } from '../admin/admin.service';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';



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



  async signInCustomer(signInDto: SignInDto) {
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

    return this.generateTokenCustomer(customer);
  }

  async signInAdmin(signInDto: SignInDto) {
    const { email, password } = signInDto;
    const admin = await this.adminService.findAdminByEmail(
      email
    );
    if (!admin) {
      throw new UnauthorizedException("Email or password incorrect");
    }
    console.log(admin);
    
    const isValidPassword = await bcrypt.compare(
      password,
      admin.dataValues.hashed_password
    );

    if (!isValidPassword) {
      throw new UnauthorizedException("Email or password incorrect");
    }
    return this.getTokenAdmin(admin);
  }



  
}



