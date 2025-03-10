import { PaymentStatusEnum } from "../model/payment.model";
export declare class CreatePaymentDto {
    orderId: number;
    amount: number;
    payment_date: string;
    payment_status?: PaymentStatusEnum;
}
