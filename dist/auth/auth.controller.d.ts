import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
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
    signInCustomer(signInDto: SignInDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    signInAdmin(signInDto: SignInDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
