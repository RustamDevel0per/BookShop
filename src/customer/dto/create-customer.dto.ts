import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsPhoneNumber, IsDateString, IsNumber, IsOptional, IsStrongPassword, Length } from "class-validator";

export class CreateCustomerDto {
  @ApiProperty({ example: "Rustam", description: "Foydalanuvchining ismi" })
  @IsString()
  @Length(2, 50)
  full_name: string;

  @ApiProperty({ example: "+998901234567", description: "Foydalanuvchining telefon raqami" })
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({ example: "StrongPassword123!", description: "Xavfsiz parol" })
  // @IsStrongPassword()
  password: string;

  confirm_password:string

  @ApiProperty({ example: "user@example.com", description: "Foydalanuvchining email manzili" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "hashed_refresh_token", description: "Foydalanuvchining refresh tokeni", required: false })
  @IsOptional()
  @IsString()
  hashed_refresh_token?: string |undefined
}
