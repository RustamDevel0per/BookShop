"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const order_details_service_1 = require("./order_details.service");
const order_details_controller_1 = require("./order_details.controller");
const sequelize_1 = require("@nestjs/sequelize");
const order_detail_model_1 = require("./model/order_detail.model");
let OrderDetailsModule = class OrderDetailsModule {
};
exports.OrderDetailsModule = OrderDetailsModule;
exports.OrderDetailsModule = OrderDetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([order_detail_model_1.OrderDetail])],
        controllers: [order_details_controller_1.OrderDetailsController],
        providers: [order_details_service_1.OrderDetailsService],
    })
], OrderDetailsModule);
//# sourceMappingURL=order_details.module.js.map