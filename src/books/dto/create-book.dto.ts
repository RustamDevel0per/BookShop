import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString, Min, IsPositive, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    example: 'Harry Potter va Sehrgarlar Tosh',
    description: 'Kitob nomi',
  })
  @IsString({ message: 'Kitob nomi matn bo‘lishi kerak' })
  name: string;

  @ApiProperty({
    example: 150000,
    description: 'Kitob narxi',
  })

  @IsNotEmpty()
  price: string;

  @ApiProperty({
    example: 100,
    description: 'Kitob soni',
  })
  @IsNumber({}, { message: 'Miqdor son bo‘lishi kerak' })
  @Min(1, { message: 'Miqdor kamida 1 bo‘lishi kerak' })
  quantity: number;

  @ApiProperty({
    example: '2025-03-09',
    description: 'Nashr qilingan sana',
  })
  @IsDateString({}, { message: 'Nashr sanasi yaroqli sana formatida bo‘lishi kerak (YYYY-MM-DD)' })
  published_date: string;

  @ApiProperty({
    example: 1,
    description: 'Muallif ID raqami',
  })
  @IsNumber({}, { message: 'Muallif ID raqami son bo‘lishi kerak' })
  @IsPositive({ message: 'Muallif ID musbat bo‘lishi kerak' })
  authorId: number;

  @ApiProperty({
    example: 2,
    description: 'Janr ID raqami',
  })
  @IsNumber({}, { message: 'Janr ID raqami son bo‘lishi kerak' })
  @IsPositive({ message: 'Janr ID musbat bo‘lishi kerak' })
  genreId: number;
}

