import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';
import { OrderDetail } from './model/order_detail.model';
export declare class OrderDetailsService {
    private orderDetailModel;
    constructor(orderDetailModel: typeof OrderDetail);
    create(createOrderDetailDto: CreateOrderDetailDto): Promise<OrderDetail>;
    findAll(): Promise<OrderDetail[]>;
    findOne(id: number): Promise<OrderDetail | null>;
    update(id: number, updateOrderDetailDto: UpdateOrderDetailDto): Promise<[affectedCount: number, affectedRows: OrderDetail[]]>;
    remove(id: number): Promise<number>;
}
