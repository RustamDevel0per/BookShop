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
    async signInCustomer(signInDto) {
        const customer = await this.customService.findCustomerByEmail(signInDto.email);
        if (!customer) {
            throw new common_1.UnauthorizedException("Email or password incorrect");
        }
        const isValidPassword = await bcrypt.compare(signInDto.password, customer.dataValues.hashed_password);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException("Email or password incorrect");
        }
        return this.generateTokenCustomer(customer);
    }
    async signInAdmin(signInDto) {
        const { email, password } = signInDto;
        const admin = await this.adminService.findAdminByEmail(email);
        if (!admin) {
            throw new common_1.UnauthorizedException("Email or password incorrect");
        }
        console.log(admin);
        const isValidPassword = await bcrypt.compare(password, admin.dataValues.hashed_password);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException("Email or password incorrect");
        }
        return this.getTokenAdmin(admin);
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