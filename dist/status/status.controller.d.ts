import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class StatusController {
    private readonly statusService;
    constructor(statusService: StatusService);
    create(createStatusDto: CreateStatusDto): Promise<import("./model/status.model").Status>;
    findAll(): Promise<import("./model/status.model").Status[]>;
    findOne(id: string): Promise<import("./model/status.model").Status | null>;
    update(id: string, updateStatusDto: UpdateStatusDto): Promise<[affectedCount: number, affectedRows: import("./model/status.model").Status[]]>;
    remove(id: string): Promise<number>;
}
