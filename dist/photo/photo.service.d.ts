import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { FileService } from 'src/file/file.service';
import { Photo } from './model/photo.model';
export declare class PhotoService {
    private photomodel;
    private readonly fileService;
    constructor(photomodel: typeof Photo, fileService: FileService);
    create(createPhotoDto: CreatePhotoDto, image: any): Promise<Photo>;
    findAll(): Promise<Photo[]>;
    findOne(id: number): Promise<Photo | null>;
    update(id: number, updatePhotoDto: UpdatePhotoDto): Promise<[affectedCount: number, affectedRows: Photo[]]>;
    remove(id: number): Promise<number>;
}
