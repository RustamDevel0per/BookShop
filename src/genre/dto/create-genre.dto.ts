import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateGenreDto {
  @ApiProperty({
    example: 'Fantastika',
    description: 'Janr nomi',
  })
  @IsString({ message: 'Janr nomi matn bo‘lishi kerak' })
  @Length(3, 30, { message: 'Janr nomi 3-30 belgidan iborat bo‘lishi kerak' })
  name: string;
}
