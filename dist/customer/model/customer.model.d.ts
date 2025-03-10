import { Model } from "sequelize-typescript";
import { Order } from "src/orders/model/order.model";
interface ICustomerCreationAttr {
    full_name: string;
    phone: string;
    hashed_password: string;
    email: string;
    hashed_refresh_token: string | undefined;
}
export declare class Customer extends Model<Customer, ICustomerCreationAttr> {
    id: number;
    full_name: string;
    phone: string;
    hashed_password: string;
    email: string;
    hashed_refresh_token: string;
    is_active: boolean;
    orders: Order[];
}
export {};
