import { Model } from "sequelize-typescript";
import { Book } from "src/books/model/book.model";
interface IPhotoCreationAttr {
    url: string | undefined;
    bookId: number;
}
export declare class Photo extends Model<Photo, IPhotoCreationAttr> {
    id: number;
    url: string;
    bookId: number;
    book: Book;
}
export {};
