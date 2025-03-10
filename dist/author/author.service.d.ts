import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './model/author.model';
export declare class AuthorService {
    private authorModel;
    constructor(authorModel: typeof Author);
    create(createAuthorDto: CreateAuthorDto): Promise<Author>;
    findAll(): Promise<Author[]>;
    findOne(id: number): Promise<Author | null>;
    update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<[affectedCount: number, affectedRows: Author[]]>;
    remove(id: number): Promise<number>;
}
