import { Model } from "sequelize-typescript";
import { Order } from "src/orders/model/order.model";
interface IPaymentCreationAttr {
    orderId: number;
    amount: number;
    payment_date: string;
    payment_status: string | undefined;
}
export declare enum PaymentStatusEnum {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED"
}
export declare class Payment extends Model<Payment, IPaymentCreationAttr> {
    id: number;
    amount: number;
    payment_date: string;
    payment_status: PaymentStatusEnum;
    orderId: number;
    order: Order;
}
export {};
