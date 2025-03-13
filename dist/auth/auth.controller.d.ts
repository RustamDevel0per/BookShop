import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    signOutAdmin(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    signOutCustomer(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    refreshAdmin(id: number, refreshToken: string, res: Response): Promise<{
        message: string;
        adminId: number;
        access_token: string;
    }>;
    refreshCusotmer(id: number, refreshToken: string, res: Response): Promise<{
        message: string;
        customerId: number;
        access_token: string;
    }>;
}
