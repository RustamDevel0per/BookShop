import { Model } from "sequelize-typescript";
import { Book } from "src/books/model/book.model";
interface IAuthorCreationAttr {
    name: string;
    biography: string;
}
export declare class Author extends Model<Author, IAuthorCreationAttr> {
    id: number;
    name: string;
    biography: string;
    book: Book[];
}
export {};
