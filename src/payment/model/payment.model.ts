import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Order } from "src/orders/model/order.model"

interface IPaymentCreationAttr{
    orderId:number
    amount:number
    payment_date:string
    payment_status:string | undefined
}
export enum PaymentStatusEnum {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED'
  }

 @Table({tableName:"payment"}) 
export class Payment extends Model<Payment, IPaymentCreationAttr> {
     @Column({
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              })
             declare id: number;

             @Column({
                type: DataType.DECIMAL,
              })
              amount: number;       

              @Column({
                type: DataType.DATE,
              })
              payment_date: string;

              @Column({
                type: DataType.ENUM,
                values: Object.values(PaymentStatusEnum)
              })
              payment_status: PaymentStatusEnum;


  @ForeignKey(() => Order)
                        @Column({
                          type: DataType.INTEGER,
                          onDelete: "Restrict",
                        })
                        orderId: number;
                    
                        @BelongsTo(() => Order)
                        order: Order;
}

