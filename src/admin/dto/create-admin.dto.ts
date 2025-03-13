import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsEmail, IsOptional, IsString, Length } from "class-validator";

export class CreateAdminDto {
    
    @ApiProperty({ example: 'Rustam Bozorov', description: 'Adminning ismi' })
    @IsString()
    @Length(3, 50)
    name: string;

    @ApiProperty({ example: 'admin@example.com', description: 'Adminning email manzili' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'hashed_password', description: 'Xavfsiz parol' })
    @IsString()
    password: string;

    confirm_password:string

}
