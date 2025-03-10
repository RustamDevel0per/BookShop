import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    create(createPaymentDto: CreatePaymentDto): Promise<import("./model/payment.model").Payment>;
    findAll(): Promise<import("./model/payment.model").Payment[]>;
    findOne(id: string): Promise<import("./model/payment.model").Payment | null>;
    update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<[affectedCount: number, affectedRows: import("./model/payment.model").Payment[]]>;
    remove(id: string): Promise<number>;
}
