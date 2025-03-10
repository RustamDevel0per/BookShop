import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';
import { InjectModel } from '@nestjs/sequelize';
import { OrderDetail } from './model/order_detail.model';

@Injectable()
export class OrderDetailsService {
      constructor(@InjectModel(OrderDetail) private orderDetailModel: typeof OrderDetail){}
  
  create(createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailModel.create(createOrderDetailDto)
  }

  findAll() {
    return this.orderDetailModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.orderDetailModel.findByPk(id)
  }

  update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return this.orderDetailModel.update(updateOrderDetailDto,{where:{id},returning:true})
  }

  remove(id: number) {
    return this.orderDetailModel.destroy({where:{id}})
  }
}
