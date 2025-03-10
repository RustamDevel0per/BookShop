import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { JwtCustomerSelfGuard } from '../guards/customer.self.guard';
import { JwtCustomerAuthGuard } from '../guards/jwt.customer.guard';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { JwtCreatorGuard } from '../guards/jwt-creator.guard';
import { JwtAdminGuard } from '../guards/jwt-admin.guard';
import { ApiResponse } from '@nestjs/swagger';

@Controller("customer")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @ApiResponse({description:"Barcha cusotmerlar ro'yxatini ko'rish mumkin creator admin token talab qilinadi"})
  // @UseGuards(JwtCreatorGuard)
  // @UseGuards(JwtAdminGuard)
  // @UseGuards(JwtCustomerAuthGuard)
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @UseGuards(JwtCustomerSelfGuard)
  @UseGuards(JwtCustomerAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerService.findOne(+id);
  }

  @UseGuards(JwtCustomerSelfGuard)
  @UseGuards(JwtCustomerAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @UseGuards(JwtCustomerSelfGuard)
  @UseGuards(JwtCustomerAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerService.remove(+id);
  }
}
