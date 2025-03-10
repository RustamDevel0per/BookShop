import { OrderDetailsService } from './order_details.service';
import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';
export declare class OrderDetailsController {
    private readonly orderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    create(createOrderDetailDto: CreateOrderDetailDto): Promise<import("./model/order_detail.model").OrderDetail>;
    findAll(): Promise<import("./model/order_detail.model").OrderDetail[]>;
    findOne(id: string): Promise<import("./model/order_detail.model").OrderDetail | null>;
    update(id: string, updateOrderDetailDto: UpdateOrderDetailDto): Promise<[affectedCount: number, affectedRows: import("./model/order_detail.model").OrderDetail[]]>;
    remove(id: string): Promise<number>;
}
