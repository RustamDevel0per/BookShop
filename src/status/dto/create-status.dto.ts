import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateStatusDto {
  @ApiProperty({
    example: 'Active',
    description: 'Status nomi',
  })
  @IsString({ message: 'Status nomi matn bo‘lishi kerak' })
//   @Length(3, 20, { message: 'Status nomi 3-20 belgidan iborat bo‘lishi kerak' })
  name: string;
}
