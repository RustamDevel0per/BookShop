import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './model/payment.model';
export declare class PaymentService {
    private paymentModel;
    constructor(paymentModel: typeof Payment);
    create(createPaymentDto: CreatePaymentDto): Promise<Payment>;
    findAll(): Promise<Payment[]>;
    findOne(id: number): Promise<Payment | null>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<[affectedCount: number, affectedRows: Payment[]]>;
    remove(id: number): Promise<number>;
}
