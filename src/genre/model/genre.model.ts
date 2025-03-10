

import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Book } from "src/books/model/book.model";

interface IGenreCreationAttr{
    name:string,

}


@Table({tableName:"genre"})
export class Genre extends Model<Genre, IGenreCreationAttr> {
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

          @HasMany(() => Book)
          book: Book[];


}
