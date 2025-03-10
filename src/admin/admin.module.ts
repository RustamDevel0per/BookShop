import { forwardRef, Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './model/admin.model';
import { AdminService } from './admin.service';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports:[
     SequelizeModule.forFeature([Admin])],
  controllers: [AdminController],
  providers: [AdminService],
  exports:[AdminService]
})
export class AdminModule {}
