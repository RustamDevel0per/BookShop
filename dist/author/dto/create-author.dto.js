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
exports.CreateAuthorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAuthorDto {
    name;
    biography;
}
exports.CreateAuthorDto = CreateAuthorDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'J.K. Rowling',
        description: 'Muallifning to‘liq ismi',
    }),
    (0, class_validator_1.IsString)({ message: 'Ism matn bo‘lishi kerak' }),
    (0, class_validator_1.Length)(3, 50, { message: 'Ism 3-50 belgidan iborat bo‘lishi kerak' }),
    __metadata("design:type", String)
], CreateAuthorDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'J.K. Rowling — britaniyalik yozuvchi, Harry Potter asarlari bilan mashhur.',
        description: 'Muallifning biografiyasi',
    }),
    (0, class_validator_1.IsString)({ message: 'Biografiya matn bo‘lishi kerak' }),
    (0, class_validator_1.Length)(10, 500, { message: 'Biografiya 10-500 belgidan iborat bo‘lishi kerak' }),
    __metadata("design:type", String)
], CreateAuthorDto.prototype, "biography", void 0);
//# sourceMappingURL=create-author.dto.js.map