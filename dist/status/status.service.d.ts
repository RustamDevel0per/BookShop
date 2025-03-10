import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './model/status.model';
export declare class StatusService {
    private statusModel;
    constructor(statusModel: typeof Status);
    create(createStatusDto: CreateStatusDto): Promise<Status>;
    findAll(): Promise<Status[]>;
    findOne(id: number): Promise<Status | null>;
    update(id: number, updateStatusDto: UpdateStatusDto): Promise<[affectedCount: number, affectedRows: Status[]]>;
    remove(id: number): Promise<number>;
}
