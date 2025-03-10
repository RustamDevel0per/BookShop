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
exports.Book = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const author_model_1 = require("../../author/model/author.model");
const genre_model_1 = require("../../genre/model/genre.model");
const order_detail_model_1 = require("../../order_details/model/order_detail.model");
let Book = class Book extends sequelize_typescript_1.Model {
    name;
    price;
    quantity;
    published_date;
    is_booked;
    genreId;
    genre;
    authorId;
    author;
    orderDetails;
};
exports.Book = Book;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Book.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Book.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Book.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", String)
], Book.prototype, "published_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: false
    }),
    __metadata("design:type", Boolean)
], Book.prototype, "is_booked", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => genre_model_1.Genre),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: "Restrict",
    }),
    __metadata("design:type", Number)
], Book.prototype, "genreId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => genre_model_1.Genre),
    __metadata("design:type", genre_model_1.Genre)
], Book.prototype, "genre", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => author_model_1.Author),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: "Restrict",
    }),
    __metadata("design:type", Number)
], Book.prototype, "authorId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => author_model_1.Author),
    __metadata("design:type", author_model_1.Author)
], Book.prototype, "author", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_detail_model_1.OrderDetail),
    __metadata("design:type", Array)
], Book.prototype, "orderDetails", void 0);
exports.Book = Book = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "book" })
], Book);
//# sourceMappingURL=book.model.js.map