import { Model } from "sequelize-typescript";
import { Order } from "src/orders/model/order.model";
interface IStatusCreationAttr {
    name: string;
}
export declare class Status extends Model<Status, IStatusCreationAttr> {
    id: number;
    name: string;
    order: Order[];
}
export {};
