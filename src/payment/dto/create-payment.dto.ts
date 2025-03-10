import { PaymentStatusEnum } from "../model/payment.model"

export class CreatePaymentDto {
    orderId:number
    amount:number
    payment_date:string
    payment_status?:PaymentStatusEnum
}
