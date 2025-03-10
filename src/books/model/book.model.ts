import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Author } from "src/author/model/author.model";
import { Genre } from "src/genre/model/genre.model";
import { OrderDetail } from "src/order_details/model/order_detail.model";




interface IBookCreationAttr{
    name:string
    price:string
    quantity:number
    published_date:string
    authorId:number
    genreId:number
}




@Table({tableName:"book"})
export class Book extends Model<Book, IBookCreationAttr>  {
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

              @Column({
                type: DataType.STRING,
              })
              price: string;

              @Column({
                type: DataType.INTEGER,
              })
              quantity: number;

              @Column({
                type: DataType.DATE,
              })
              published_date: string;

              @Column({
                type: DataType.BOOLEAN,
                defaultValue:false
              })
              is_booked: boolean;


              @ForeignKey(() => Genre)
              @Column({
                type: DataType.INTEGER,
                onDelete: "Restrict",
              })
              genreId: number;
            
              @BelongsTo(() => Genre)
              genre: Genre;


              @ForeignKey(() => Author)
              @Column({
                type: DataType.INTEGER,
                onDelete: "Restrict",
              })
              authorId: number;
            
              @BelongsTo(() => Author)
              author: Author;

                  @HasMany(() => OrderDetail)
                  orderDetails: OrderDetail[];
}
