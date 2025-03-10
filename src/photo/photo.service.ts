import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { FileService } from 'src/file/file.service';
import { Photo } from './model/photo.model';

@Injectable()
export class PhotoService {
  constructor(@InjectModel(Photo) private photomodel: typeof Photo,
  private readonly fileService:FileService) {}

  async create(createPhotoDto: CreatePhotoDto, image:any) {
    const fileName=await this.fileService.saveFile(image)
    return this.photomodel.create({...createPhotoDto, url :fileName});
  }

  findAll() {
    return this.photomodel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.photomodel.findByPk(id)
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return this.photomodel.update(updatePhotoDto,{where:{id},returning:true})
  }

  remove(id: number) {
    return this.photomodel.destroy({where:{id}})
  }
}
