import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<import("./model/order.model").Order>;
    findAll(): Promise<import("./model/order.model").Order[]>;
    findOne(id: string): Promise<import("./model/order.model").Order | null>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<[affectedCount: number, affectedRows: import("./model/order.model").Order[]]>;
    remove(id: string): Promise<number>;
}
