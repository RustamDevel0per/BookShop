import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Customer } from "src/customer/model/customer.model"
import { OrderDetail } from "src/order_details/model/order_detail.model"
import { Status } from "src/status/model/status.model"

interface IOrderCreationAttr{
    customerId:number
    statusId:number
    order_date:string
    total_amount:number
}


@Table({tableName:"order"})
export class Order extends Model<Order, IOrderCreationAttr> {

      @Column({
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          })
         declare id: number;
        
         @Column({
            type: DataType.DATE,
          })
          order_date: string;

          @Column({
            type: DataType.DECIMAL,
          })
          total_amount: number;

           @ForeignKey(() => Customer)
                        @Column({
                          type: DataType.INTEGER,
                          onDelete: "Restrict",
                        })
                        customerId: number;
                    
                        @BelongsTo(() => Customer)
                        customer: Customer;


                        @ForeignKey(() => Status)
                        @Column({
                          type: DataType.INTEGER,
                          onDelete: "Restrict",
                        })
                        statusId: number;
                      
                        @BelongsTo(() => Status)
                        status: Status;

                                  @HasMany(() => OrderDetail)
                                  orderDetails: OrderDetail[];
}
