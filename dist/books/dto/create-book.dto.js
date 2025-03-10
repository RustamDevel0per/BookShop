"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateBookDto {
    name;
    price;
    quantity;
    published_date;
    authorId;
    genreId;
}
exports.CreateBookDto = CreateBookDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Harry Potter va Sehrgarlar Tosh',
        description: 'Kitob nomi',
    }),
    (0, class_validator_1.IsString)({ message: 'Kitob nomi matn bo‘lishi kerak' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 150000,
        description: 'Kitob narxi',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 100,
        description: 'Kitob soni',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'Miqdor son bo‘lishi kerak' }),
    (0, class_validator_1.Min)(1, { message: 'Miqdor kamida 1 bo‘lishi kerak' }),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2025-03-09',
        description: 'Nashr qilingan sana',
    }),
    (0, class_validator_1.IsDateString)({}, { message: 'Nashr sanasi yaroqli sana formatida bo‘lishi kerak (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "published_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Muallif ID raqami',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'Muallif ID raqami son bo‘lishi kerak' }),
    (0, class_validator_1.IsPositive)({ message: 'Muallif ID musbat bo‘lishi kerak' }),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "authorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        description: 'Janr ID raqami',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'Janr ID raqami son bo‘lishi kerak' }),
    (0, class_validator_1.IsPositive)({ message: 'Janr ID musbat bo‘lishi kerak' }),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "genreId", void 0);
//# sourceMappingURL=create-book.dto.js.map