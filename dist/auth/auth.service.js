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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const customer_service_1 = require("../customer/customer.service");
const admin_service_1 = require("../admin/admin.service");
let AuthService = class AuthService {
    CustomerService;
    jwtService;
    customService;
    adminService;
    constructor(CustomerService, jwtService, customService, adminService) {
        this.CustomerService = CustomerService;
        this.jwtService = jwtService;
        this.customService = customService;
        this.adminService = adminService;
    }
    async generateTokenCustomer(customer) {
        const payload = {
            id: customer.id,
            email: customer.email
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.ACCESS_TOKEN_KEY_CUSTOMER,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY_CUSTOMER,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return {
            access_token: accessToken,
            refresh_token: refreshToken,
        };
    }
    async getTokenAdmin(admin) {
        const payload = {
            id: admin.id,
            email: admin.email,
            is_creator: admin.is_creator,
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.ACCESS_TOKEN_KEY_ADMIN,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY_ADMIN,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return {
            access_token: accessToken,
            refresh_token: refreshToken,
        };
    }
    async signUpCustomer(createCustomerDto) {
        const candidate = await this.customService.findCustomerByEmail(createCustomerDto.email);
        if (candidate) {
            throw new common_1.BadRequestException("Customer exists");
        }
        const hashedPassword = await bcrypt.hash(createCustomerDto.password, 7);
        createCustomerDto.password = hashedPassword;
        const newCustomer = await this.customService.create(createCustomerDto);
        return this.generateTokenCustomer(newCustomer);
    }
    async signUpAdmin(createAdminDto) {
        const candidate = await this.adminService.findAdminByEmail(createAdminDto.email);
        if (candidate) {
            throw new common_1.BadRequestException("Admin exists");
        }
        if (createAdminDto.password !== createAdminDto.confirm_password) {
            throw new common_1.BadRequestException("Parollar mos emas");
        }
        const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
        createAdminDto.password = hashedPassword;
        const newAdmin = await this.adminService.create({ ...createAdminDto, });
        return this.getTokenAdmin(newAdmin);
    }
    async signInCustomer(signInDto, res) {
        const customer = await this.customService.findCustomerByEmail(signInDto.email);
        if (!customer) {
            throw new common_1.UnauthorizedException("Email or password incorrect");
        }
        const isValidPassword = await bcrypt.compare(signInDto.password, customer.dataValues.hashed_password);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException("Email or password incorrect");
        }
        const tokens = await this.generateTokenCustomer(customer);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updateUser = await this.customService.updateRefreshToken(customer.id, hashed_refresh_token);
        if (!updateUser) {
            throw new common_1.InternalServerErrorException("Tokenni saqlashda xatolik");
        }
        res.cookie("refresh_token", tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: "Customer logged in",
            customerId: customer.id,
            access_token: tokens.access_token,
        };
        return response;
    }
    async signInAdmin(signInDto, res) {
        const { email, password } = signInDto;
        const admin = await this.adminService.findAdminByEmail(email);
        if (!admin) {
            throw new common_1.UnauthorizedException("Email or password incorrect");
        }
        const isValidPassword = await bcrypt.compare(password, admin.dataValues.hashed_password);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException("Email or password incorrect");
        }
        const tokens = await this.getTokenAdmin(admin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updateUser = await this.adminService.updateRefreshToken(admin.id, hashed_refresh_token);
        if (!updateUser) {
            throw new common_1.InternalServerErrorException("Tokenni saqlashda xatolik");
        }
        res.cookie("refresh_token", tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: "Admin logged in",
            adminId: admin.id,
            access_token: tokens.access_token,
        };
        return response;
    }
    async signOutCustomer(refreshToken, res) {
        const userData = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY_CUSTOMER,
        });
        if (!userData) {
            throw new common_1.ForbiddenException("User not verified");
        }
        const hashed_refresh_token = null;
        await this.customService.updateRefreshToken(userData.id, hashed_refresh_token);
        res.clearCookie("refresh_token");
        const response = {
            message: "Customer logged out successfully",
        };
        return response;
    }
    async signOutAdmin(refreshToken, res) {
        const userData = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY_ADMIN,
        });
        if (!userData) {
            throw new common_1.ForbiddenException("User not verified");
        }
        const hashed_refresh_token = null;
        await this.adminService.updateRefreshToken(userData.id, hashed_refresh_token);
        res.clearCookie("refresh_token");
        const response = {
            message: "Admin logged out successfully",
        };
        return response;
    }
    async refreshTokenAdmin(adminId, refreshToken, res) {
        const decodedToken = await this.jwtService.decode(refreshToken);
        if (adminId != decodedToken["id"]) {
            throw new common_1.ForbiddenException("Ruxsat etilmagan foydalanuvchi");
        }
        const admin = await this.adminService.findOne(adminId);
        if (!admin || !admin.dataValues.hashed_refresh_token) {
            throw new common_1.BadRequestException("admin not found");
        }
        const tokenMatch = await bcrypt.compare(refreshToken, admin.dataValues.hashed_refresh_token);
        const tokens = await this.getTokenAdmin(admin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updateUser = await this.adminService.updateRefreshToken(admin.id, hashed_refresh_token);
        if (!updateUser) {
            throw new common_1.InternalServerErrorException("Tokenni saqlashda xatolik");
        }
        res.cookie("refresh_token", tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: "Admin refreshed",
            adminId: admin.id,
            access_token: tokens.access_token,
        };
        return response;
    }
    async refreshTokenCustomer(customerId, refreshToken, res) {
        const decodedToken = await this.jwtService.decode(refreshToken);
        if (customerId != decodedToken["id"]) {
            throw new common_1.ForbiddenException("Ruxsat etilmagan foydalanuvchi");
        }
        const customer = await this.customService.findOne(customerId);
        if (!customer || !customer.dataValues.hashed_refresh_token) {
            throw new common_1.BadRequestException("admin not found");
        }
        const tokenMatch = await bcrypt.compare(refreshToken, customer.dataValues.hashed_refresh_token);
        const tokens = await this.generateTokenCustomer(customer);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updateCustomer = await this.customService.updateRefreshToken(customer.id, hashed_refresh_token);
        if (!updateCustomer) {
            throw new common_1.InternalServerErrorException("Tokenni saqlashda xatolik");
        }
        res.cookie("refresh_token", tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: "Customer refreshed",
            customerId: customer.id,
            access_token: tokens.access_token,
        };
        return response;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [customer_service_1.CustomerService,
        jwt_1.JwtService,
        customer_service_1.CustomerService,
        admin_service_1.AdminService])
], AuthService);
//# sourceMappingURL=auth.service.js.map