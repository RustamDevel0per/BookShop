import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    create(createCustomerDto: CreateCustomerDto): Promise<import("./model/customer.model").Customer>;
    findAll(): Promise<import("./model/customer.model").Customer[]>;
    findOne(id: string): Promise<import("./model/customer.model").Customer | null>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<[affectedCount: number, affectedRows: import("./model/customer.model").Customer[]]>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
