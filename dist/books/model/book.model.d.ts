import { Model } from "sequelize-typescript";
import { Author } from "src/author/model/author.model";
import { Genre } from "src/genre/model/genre.model";
import { OrderDetail } from "src/order_details/model/order_detail.model";
interface IBookCreationAttr {
    name: string;
    price: string;
    quantity: number;
    published_date: string;
    authorId: number;
    genreId: number;
}
export declare class Book extends Model<Book, IBookCreationAttr> {
    id: number;
    name: string;
    price: string;
    quantity: number;
    published_date: string;
    is_booked: boolean;
    genreId: number;
    genre: Genre;
    authorId: number;
    author: Author;
    orderDetails: OrderDetail[];
}
export {};
