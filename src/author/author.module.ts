import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { Author } from './model/author.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[ SequelizeModule.forFeature([Author])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
