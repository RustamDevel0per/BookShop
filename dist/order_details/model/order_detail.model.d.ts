import { Model } from "sequelize-typescript";
import { Book } from "src/books/model/book.model";
import { Order } from "src/orders/model/order.model";
interface IOrderDetailCreationAttr {
    orderId: number;
    bookId: number;
    quantity: number;
    price: number;
}
export declare class OrderDetail extends Model<OrderDetail, IOrderDetailCreationAttr> {
    id: number;
    quantity: number;
    price: number;
    orderId: number;
    order: Order;
    bookId: number;
    book: Book;
}
export {};
