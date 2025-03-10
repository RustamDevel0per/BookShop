import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ example: 1, description: 'Foydalanuvchi IDsi' })
  @IsInt()
  @IsPositive()
  customerId: number;

  @ApiProperty({ example: 2, description: 'Status IDsi' })
  @IsInt()
  @IsPositive()
  statusId: number;

  @ApiProperty({ example: '2025-03-09', description: 'Buyurtma sanasi' })
  @IsString()
  @IsNotEmpty()
  @IsDateString()
  order_date: string;

  @ApiProperty({ example: 250000, description: 'Umumiy summa' })
  @IsInt()
  @IsPositive()
  total_amount: number;
}

