import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './model/order.model';
export declare class OrdersService {
    private orderModel;
    constructor(orderModel: typeof Order);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order | null>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<[affectedCount: number, affectedRows: Order[]]>;
    remove(id: number): Promise<number>;
}
