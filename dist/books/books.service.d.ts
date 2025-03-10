import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './model/book.model';
export declare class BooksService {
    private bookModel;
    constructor(bookModel: typeof Book);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book | null>;
    update(id: number, updateBookDto: UpdateBookDto): Promise<[affectedCount: number, affectedRows: Book[]]>;
    remove(id: number): Promise<number>;
}
