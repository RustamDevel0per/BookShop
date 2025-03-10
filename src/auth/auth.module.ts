import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CustomerModule } from '../customer/customer.module';
import { AdminModule } from '../admin/admin.module';
import { AdminService } from 'src/admin/admin.service';
import { CustomerService } from 'src/customer/customer.service';

@Module({
  imports:[
    CustomerModule,
    AdminModule,
    JwtModule.register({ global: true }),],
  controllers: [AuthController],
  providers: [AuthService,JwtService],
  
})
export class AuthModule {}
