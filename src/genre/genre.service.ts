import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Genre } from './model/genre.model';

@Injectable()
export class GenreService {
    constructor(@InjectModel(Genre) private genreModel: typeof Genre){}
  
  create(createGenreDto: CreateGenreDto) {
    return this.genreModel.create(createGenreDto)
  }

  findAll() {
    return this.genreModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.genreModel.findByPk(id)
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return this.genreModel.update(updateGenreDto,{where:{id},returning:true})
  }

  remove(id: number) {
    return this.genreModel.destroy({where:{id}})
  }
}
