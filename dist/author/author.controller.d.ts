import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    create(createAuthorDto: CreateAuthorDto): Promise<import("./model/author.model").Author>;
    findAll(): Promise<import("./model/author.model").Author[]>;
    findOne(id: string): Promise<import("./model/author.model").Author | null>;
    update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<[affectedCount: number, affectedRows: import("./model/author.model").Author[]]>;
    remove(id: string): Promise<number>;
}
