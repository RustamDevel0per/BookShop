import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    create(createGenreDto: CreateGenreDto): Promise<import("./model/genre.model").Genre>;
    findAll(): Promise<import("./model/genre.model").Genre[]>;
    findOne(id: string): Promise<import("./model/genre.model").Genre | null>;
    update(id: string, updateGenreDto: UpdateGenreDto): Promise<[affectedCount: number, affectedRows: import("./model/genre.model").Genre[]]>;
    remove(id: string): Promise<number>;
}
