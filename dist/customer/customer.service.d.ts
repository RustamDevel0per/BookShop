import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './model/customer.model';
export declare class CustomerService {
    private customerModel;
    constructor(customerModel: typeof Customer);
    create(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    updateRefreshToken(id: number, hashed_refresh_token: string | null): Promise<[affectedCount: number]>;
    findAll(): Promise<Customer[]>;
    findCustomerByEmail(email: string): Promise<Customer | null>;
    findOne(id: number): Promise<Customer | null>;
    update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<[affectedCount: number, affectedRows: Customer[]]>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
