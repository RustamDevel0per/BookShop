import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './model/admin.model';
export declare class AdminService {
    private adminModel;
    constructor(adminModel: typeof Admin);
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    findAdminByEmail(email: string): Promise<Admin | null>;
    findAll(): Promise<Admin[]>;
    findOne(id: number): Promise<Admin | null>;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<[affectedCount: number, affectedRows: Admin[]]>;
    remove(id: number): Promise<number>;
}
