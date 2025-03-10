import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';
import { AuthorModule } from './author/author.module';
import { Author } from './author/model/author.model';
import { GenreModule } from './genre/genre.module';
import { Genre } from './genre/model/genre.model';
import { StatusModule } from './status/status.module';
import { BooksModule } from './books/books.module';
import { Book } from './books/model/book.model';
import { Status } from './status/model/status.model';
import { PhotoModule } from './photo/photo.module';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/model/order.model';
import { Customer } from './customer/model/customer.model';
import { OrderDetail } from './order_details/model/order_detail.model';
import { OrderDetailsModule } from './order_details/order_details.module';
import { PaymentModule } from './payment/payment.module';
import { Payment } from './payment/model/payment.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: `postgres`,
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      port: Number(process.env.POSTGRES_PORT),
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Author,
        Book,
        Genre,
        Status,
        Order,
        Customer,
        OrderDetail,
        Payment
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"),
    }),

  AdminModule,
CustomerModule,
AuthModule,
AuthorModule,
GenreModule,
StatusModule,
BooksModule,
PhotoModule,
OrdersModule,
OrderDetailsModule,
PaymentModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
