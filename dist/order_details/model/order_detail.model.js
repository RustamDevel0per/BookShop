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
exports.OrderDetail = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const book_model_1 = require("../../books/model/book.model");
const order_model_1 = require("../../orders/model/order.model");
let OrderDetail = class OrderDetail extends sequelize_typescript_1.Model {
    quantity;
    price;
    orderId;
    order;
    bookId;
    book;
};
exports.OrderDetail = OrderDetail;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL,
    }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => order_model_1.Order),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: "Restrict",
    }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "orderId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => order_model_1.Order),
    __metadata("design:type", order_model_1.Order)
], OrderDetail.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => book_model_1.Book),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: "Restrict",
    }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "bookId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => book_model_1.Book),
    __metadata("design:type", book_model_1.Book)
], OrderDetail.prototype, "book", void 0);
exports.OrderDetail = OrderDetail = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "order_details" })
], OrderDetail);
//# sourceMappingURL=order_detail.model.js.map