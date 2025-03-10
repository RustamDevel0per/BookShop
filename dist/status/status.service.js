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
exports.StatusService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const status_model_1 = require("./model/status.model");
let StatusService = class StatusService {
    statusModel;
    constructor(statusModel) {
        this.statusModel = statusModel;
    }
    create(createStatusDto) {
        return this.statusModel.create(createStatusDto);
    }
    findAll() {
        return this.statusModel.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.statusModel.findByPk(id);
    }
    update(id, updateStatusDto) {
        return this.statusModel.update(updateStatusDto, { where: { id }, returning: true });
    }
    remove(id) {
        return this.statusModel.destroy({ where: { id } });
    }
};
exports.StatusService = StatusService;
exports.StatusService = StatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(status_model_1.Status)),
    __metadata("design:paramtypes", [Object])
], StatusService);
//# sourceMappingURL=status.service.js.map