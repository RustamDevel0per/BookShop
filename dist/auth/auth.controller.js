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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const sign_in_dto_1 = require("./dto/sign-in.dto");
const create_customer_dto_1 = require("../customer/dto/create-customer.dto");
const create_admin_dto_1 = require("../admin/dto/create-admin.dto");
const swagger_1 = require("@nestjs/swagger");
const cookie_getter_decorator_1 = require("../decorators/cookie-getter.decorator");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async signUpCustomer(createCustomerDto) {
        return this.authService.signUpCustomer(createCustomerDto);
    }
    async signUpAdmin(createAdminDto) {
        return this.authService.signUpAdmin(createAdminDto);
    }
    async signInCustomer(signInDto, res) {
        return this.authService.signInCustomer(signInDto, res);
    }
    async signInAdmin(signInDto, res) {
        return this.authService.signInAdmin(signInDto, res);
    }
    signOutAdmin(refreshToken, res) {
        return this.authService.signOutAdmin(refreshToken, res);
    }
    signOutCustomer(refreshToken, res) {
        return this.authService.signOutCustomer(refreshToken, res);
    }
    refreshAdmin(id, refreshToken, res) {
        return this.authService.refreshTokenAdmin(id, refreshToken, res);
    }
    refreshCusotmer(id, refreshToken, res) {
        return this.authService.refreshTokenCustomer(id, refreshToken, res);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("signup-customer"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUpCustomer", null);
__decorate([
    (0, common_1.Post)("signup-admin"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUpAdmin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Tizimga kirish" }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("signin-customer"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_dto_1.SignInDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signInCustomer", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Tizimga kirish" }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("signin-admin"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_dto_1.SignInDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signInAdmin", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("signout-admin"),
    __param(0, (0, cookie_getter_decorator_1.CookieGetter)("refresh_token")),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signOutAdmin", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("signout-customer"),
    __param(0, (0, cookie_getter_decorator_1.CookieGetter)("refresh_token")),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signOutCustomer", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(":id/refresh-admin"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, cookie_getter_decorator_1.CookieGetter)("refresh_token")),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refreshAdmin", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(":id/refresh-customer"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, cookie_getter_decorator_1.CookieGetter)("refresh_token")),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refreshCusotmer", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map