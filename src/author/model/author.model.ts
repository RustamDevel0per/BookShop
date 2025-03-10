import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Book } from "src/books/model/book.model";


interface IAuthorCreationAttr{
    name:string,
    biography:string
}


@Table({tableName:"author"})
export class Author extends Model<Author, IAuthorCreationAttr> {
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
      biography: string;

       @HasMany(() => Book)
                book: Book[];
                
}
