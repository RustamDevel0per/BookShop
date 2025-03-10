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
exports.Genre = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const book_model_1 = require("../../books/model/book.model");
let Genre = class Genre extends sequelize_typescript_1.Model {
    name;
    book;
};
exports.Genre = Genre;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Genre.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Genre.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => book_model_1.Book),
    __metadata("design:type", Array)
], Genre.prototype, "book", void 0);
exports.Genre = Genre = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "genre" })
], Genre);
//# sourceMappingURL=genre.model.js.map