import { Model } from "sequelize-typescript";
import { Book } from "src/books/model/book.model";
interface IGenreCreationAttr {
    name: string;
}
export declare class Genre extends Model<Genre, IGenreCreationAttr> {
    id: number;
    name: string;
    book: Book[];
}
export {};
