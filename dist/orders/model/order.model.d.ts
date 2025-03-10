import { Model } from "sequelize-typescript";
import { Customer } from "src/customer/model/customer.model";
import { OrderDetail } from "src/order_details/model/order_detail.model";
import { Status } from "src/status/model/status.model";
interface IOrderCreationAttr {
    customerId: number;
    statusId: number;
    order_date: string;
    total_amount: number;
}
export declare class Order extends Model<Order, IOrderCreationAttr> {
    id: number;
    order_date: string;
    total_amount: number;
    customerId: number;
    customer: Customer;
    statusId: number;
    status: Status;
    orderDetails: OrderDetail[];
}
export {};
