import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<import("./model/admin.model").Admin>;
    findAll(): Promise<import("./model/admin.model").Admin[]>;
    findOne(id: string): Promise<import("./model/admin.model").Admin | null>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<[affectedCount: number, affectedRows: import("./model/admin.model").Admin[]]>;
    remove(id: string): Promise<number>;
}
