import { Body, Controller, HttpCode, HttpStatus, Param, Post, Res, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { CookieGetter } from '../decorators/cookie-getter.decorator';

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

  @ApiOperation({ summary: "Tizimga kirish" })
  @HttpCode(HttpStatus.OK)
  @Post("signin-customer")
  async signInCustomer(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signInCustomer(signInDto, res);
  }

  @ApiOperation({ summary: "Tizimga kirish" })
  @HttpCode(HttpStatus.OK)
  @Post("signin-admin")
  async signInAdmin(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signInAdmin(signInDto, res);
  }

  @HttpCode(200)
  @Post("signout-admin")
  signOutAdmin(
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signOutAdmin(refreshToken, res);
  }

  @HttpCode(200)
  @Post("signout-customer")
  signOutCustomer(
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signOutCustomer(refreshToken, res);
  }

  @HttpCode(200)
  @Post(":id/refresh-admin")
  refreshAdmin(
    @Param("id") id: number,
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.refreshTokenAdmin(id, refreshToken, res);
  }

  @HttpCode(200)
  @Post(":id/refresh-customer")
  refreshCusotmer(
    @Param("id") id: number,
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.refreshTokenCustomer(id, refreshToken, res);
  }


}
