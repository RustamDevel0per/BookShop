import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Order } from "src/orders/model/order.model";


interface IStatusCreationAttr{
    name:string,

}

@Table({tableName:"status"})
export class Status extends Model<Status, IStatusCreationAttr> {

      @Column({
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              })
             declare id: number;
            
              @Column({
                type: DataType.STRING,
              })
              name: string;

              
                     @HasMany(() => Order)
                                order: Order[];

}
