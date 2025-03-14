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
exports.CreateGenreDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateGenreDto {
    name;
}
exports.CreateGenreDto = CreateGenreDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Fantastika',
        description: 'Janr nomi',
    }),
    (0, class_validator_1.IsString)({ message: 'Janr nomi matn bo‘lishi kerak' }),
    (0, class_validator_1.Length)(3, 30, { message: 'Janr nomi 3-30 belgidan iborat bo‘lishi kerak' }),
    __metadata("design:type", String)
], CreateGenreDto.prototype, "name", void 0);
//# sourceMappingURL=create-genre.dto.js.map