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
exports.Photo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const book_model_1 = require("../../books/model/book.model");
let Photo = class Photo extends sequelize_typescript_1.Model {
    url;
    bookId;
    book;
};
exports.Photo = Photo;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Photo.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Photo.prototype, "url", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => book_model_1.Book),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: "Restrict",
    }),
    __metadata("design:type", Number)
], Photo.prototype, "bookId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => book_model_1.Book),
    __metadata("design:type", book_model_1.Book)
], Photo.prototype, "book", void 0);
exports.Photo = Photo = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "photo" })
], Photo);
//# sourceMappingURL=photo.model.js.map