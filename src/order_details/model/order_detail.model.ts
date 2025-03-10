
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Book } from "src/books/model/book.model"
import { Order } from "src/orders/model/order.model"

interface IOrderDetailCreationAttr{
    orderId:number
    bookId:number
    quantity:number
    price:number
}


@Table({tableName:"order_details"})
export class OrderDetail extends Model<OrderDetail, IOrderDetailCreationAttr> {
  @Column({
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          })
         declare id: number;
        
         @Column({
            type: DataType.INTEGER,
          })
          quantity: number;

          @Column({
            type: DataType.DECIMAL,
          })
          price: number;

           @ForeignKey(() => Order)
                        @Column({
                          type: DataType.INTEGER,
                          onDelete: "Restrict",
                        })
                        orderId: number;
                    
                        @BelongsTo(() => Order)
                        order: Order;


                        @ForeignKey(() => Book)
                        @Column({
                          type: DataType.INTEGER,
                          onDelete: "Restrict",
                        })
                        bookId: number;
                      
                        @BelongsTo(() => Book)
                        book: Book;

}
