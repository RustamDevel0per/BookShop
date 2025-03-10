import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class CreateOrderDetailDto {
  @ApiProperty({ example: 1, description: 'Buyurtma IDsi' })
  @IsInt()
  @IsPositive()
  orderId: number;

  @ApiProperty({ example: 5, description: 'Kitob IDsi' })
  @IsInt()
  @IsPositive()
  bookId: number;

  @ApiProperty({ example: 2, description: 'Buyurtma miqdori' })
  @IsInt()
  @IsPositive()
  quantity: number;

  @ApiProperty({ example: 100000, description: 'Narxi' })
  @IsInt()
  @IsPositive()
  price: number;
}