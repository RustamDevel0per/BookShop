import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<import("./model/book.model").Book>;
    findAll(): Promise<import("./model/book.model").Book[]>;
    findOne(id: string): Promise<import("./model/book.model").Book | null>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<[affectedCount: number, affectedRows: import("./model/book.model").Book[]]>;
    remove(id: string): Promise<number>;
}
