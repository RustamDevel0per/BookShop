import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post("signup-customer")
  async signUpCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.authService.signUpCustomer(createCustomerDto);
  }

  @Post("signup-admin")
  async signUpAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.signUpAdmin(createAdminDto);
  }


  @Post("signin-customer")
  async signInCustomer(@Body() signInDto: SignInDto) {
    return this.authService.signInCustomer(signInDto);
  }

  @Post("signin-admin")
  async signInAdmin(@Body() signInDto: SignInDto) {
    return this.authService.signInAdmin(signInDto);
  }
}
