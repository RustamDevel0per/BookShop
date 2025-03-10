import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty({
    example: 'J.K. Rowling',
    description: 'Muallifning to‘liq ismi',
  })
  @IsString({ message: 'Ism matn bo‘lishi kerak' })
  @Length(3, 50, { message: 'Ism 3-50 belgidan iborat bo‘lishi kerak' })
  name: string;

  @ApiProperty({
    example: 'J.K. Rowling — britaniyalik yozuvchi, Harry Potter asarlari bilan mashhur.',
    description: 'Muallifning biografiyasi',
  })
  @IsString({ message: 'Biografiya matn bo‘lishi kerak' })
  @Length(10, 500, { message: 'Biografiya 10-500 belgidan iborat bo‘lishi kerak' })
  biography: string;
}

