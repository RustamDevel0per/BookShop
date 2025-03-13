import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './model/admin.model';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminModel: typeof Admin) {}

async create(createAdminDto: CreateAdminDto) {
  const {password,confirm_password, ...data} = createAdminDto
    const newAdmin = await this.adminModel.create({
      ...data,
      hashed_password: createAdminDto.password,
    });
    return newAdmin
  }


  async updateRefreshToken(id: number, hashed_refresh_token: string | null) {
    const updateUser = await this.adminModel.update(
      { hashed_refresh_token:hashed_refresh_token! },
      {
        where: { id },
      }
    );
    return updateUser;
  }



  findAdminByEmail(email: string): Promise<Admin | null> {
    return this.adminModel.findOne({
      where: { email }
    });
  }
  
  findAll() {
    return this.adminModel.findAll();
  }

  findOne(id: number) {
    return this.adminModel.findByPk(id);
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminModel.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.adminModel.destroy({ where: { id } });
  }
}
