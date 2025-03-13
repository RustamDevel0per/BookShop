import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './model/customer.model';

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer) private customerModel: typeof Customer) {}

 async create(createCustomerDto: CreateCustomerDto) {
    const newCustomer = await this.customerModel.create({
      ...createCustomerDto,
      hashed_password:createCustomerDto.password
    });
    return newCustomer
  }


  async updateRefreshToken(id: number, hashed_refresh_token: string | null) {
    const updateUser = await this.customerModel.update(
      { hashed_refresh_token:hashed_refresh_token! },
      {
        where: { id },
      }
    );
    return updateUser;
  }




  findAll() {
    return this.customerModel.findAll({ include: { all: true } });
  }

  findCustomerByEmail(email: string): Promise<Customer | null> {
    return this.customerModel.findOne({
      where: { email },
      include: {all:true},
    });
  }
  findOne(id: number) {
    return this.customerModel.findByPk(id);
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel.update(updateCustomerDto, {
      where: { id },
      returning: true,
    });
  }

async  remove(id: number) {
    await this.customerModel.destroy({ where: { id } });
    return {message:"Customer deleted"}
  }
}
