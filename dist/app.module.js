"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const admin_module_1 = require("./admin/admin.module");
const customer_module_1 = require("./customer/customer.module");
const auth_module_1 = require("./auth/auth.module");
const author_module_1 = require("./author/author.module");
const author_model_1 = require("./author/model/author.model");
const genre_module_1 = require("./genre/genre.module");
const genre_model_1 = require("./genre/model/genre.model");
const status_module_1 = require("./status/status.module");
const books_module_1 = require("./books/books.module");
const book_model_1 = require("./books/model/book.model");
const status_model_1 = require("./status/model/status.model");
const photo_module_1 = require("./photo/photo.module");
const orders_module_1 = require("./orders/orders.module");
const order_model_1 = require("./orders/model/order.model");
const customer_model_1 = require("./customer/model/customer.model");
const order_detail_model_1 = require("./order_details/model/order_detail.model");
const order_details_module_1 = require("./order_details/order_details.module");
const payment_module_1 = require("./payment/payment.module");
const payment_model_1 = require("./payment/model/payment.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: `postgres`,
                host: process.env.POSTGRES_HOST,
                username: process.env.POSTGRES_USER,
                port: Number(process.env.POSTGRES_PORT),
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [
                    author_model_1.Author,
                    book_model_1.Book,
                    genre_model_1.Genre,
                    status_model_1.Status,
                    order_model_1.Order,
                    customer_model_1.Customer,
                    order_detail_model_1.OrderDetail,
                    payment_model_1.Payment
                ],
                autoLoadModels: true,
                sync: { alter: true },
                logging: false,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "..", "static"),
            }),
            admin_module_1.AdminModule,
            customer_module_1.CustomerModule,
            auth_module_1.AuthModule,
            author_module_1.AuthorModule,
            genre_module_1.GenreModule,
            status_module_1.StatusModule,
            books_module_1.BooksModule,
            photo_module_1.PhotoModule,
            orders_module_1.OrdersModule,
            order_details_module_1.OrderDetailsModule,
            payment_module_1.PaymentModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map