import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './model/genre.model';
export declare class GenreService {
    private genreModel;
    constructor(genreModel: typeof Genre);
    create(createGenreDto: CreateGenreDto): Promise<Genre>;
    findAll(): Promise<Genre[]>;
    findOne(id: number): Promise<Genre | null>;
    update(id: number, updateGenreDto: UpdateGenreDto): Promise<[affectedCount: number, affectedRows: Genre[]]>;
    remove(id: number): Promise<number>;
}
