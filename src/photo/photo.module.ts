import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Photo } from './model/photo.model';
import { FileService } from 'src/file/file.service';

@Module({
  imports:[SequelizeModule.forFeature([Photo])],
  controllers: [PhotoController],
  providers: [PhotoService,FileService],
})
export class PhotoModule {}
