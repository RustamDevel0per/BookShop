import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
export declare class PhotoController {
    private readonly photoService;
    constructor(photoService: PhotoService);
    create(createPhotoDto: CreatePhotoDto, image: any): Promise<import("./model/photo.model").Photo>;
    findAll(): Promise<import("./model/photo.model").Photo[]>;
    findOne(id: string): Promise<import("./model/photo.model").Photo | null>;
    update(id: string, updatePhotoDto: UpdatePhotoDto): Promise<[affectedCount: number, affectedRows: import("./model/photo.model").Photo[]]>;
    remove(id: string): Promise<number>;
}
