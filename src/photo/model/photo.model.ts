import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Book } from "src/books/model/book.model";

interface IPhotoCreationAttr{
    url:string |undefined
    bookId:number
}

@Table({tableName:"photo"})
export class Photo extends Model<Photo, IPhotoCreationAttr> {
     @Column({
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          })
         declare id: number;
        
          @Column({
            type: DataType.STRING,
          })
          url: string;

            @ForeignKey(() => Book)
                        @Column({
                          type: DataType.INTEGER,
                          onDelete: "Restrict",
                        })
                        bookId: number;
                      
                        @BelongsTo(() => Book)
                        book: Book;


}
