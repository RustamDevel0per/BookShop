import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign-in.dto';
import { CustomerService } from '../customer/customer.service';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { Admin } from '../admin/model/admin.model';
import { AdminService } from '../admin/admin.service';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { Response } from 'express';
export declare class AuthService {
    private readonly CustomerService;
    private readonly jwtService;
    private readonly customService;
    private readonly adminService;
    constructor(CustomerService: CustomerService, jwtService: JwtService, customService: CustomerService, adminService: AdminService);
    private generateTokenCustomer;
    getTokenAdmin(admin: Admin): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    signUpCustomer(createCustomerDto: CreateCustomerDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    signUpAdmin(createAdminDto: CreateAdminDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    signInCustomer(signInDto: SignInDto, res: Response): Promise<{
        message: string;
        customerId: number;
        access_token: string;
    }>;
    signInAdmin(signInDto: SignInDto, res: Response): Promise<{
        message: string;
        adminId: number;
        access_token: string;
    }>;
    signOutCustomer(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    signOutAdmin(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    refreshTokenAdmin(adminId: number, refreshToken: string, res: Response): Promise<{
        message: string;
        adminId: number;
        access_token: string;
    }>;
    refreshTokenCustomer(customerId: number, refreshToken: string, res: Response): Promise<{
        message: string;
        customerId: number;
        access_token: string;
    }>;
}
