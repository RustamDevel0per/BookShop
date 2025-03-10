import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  try {
    const PORT = process.env.PORT ?? 3003;
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle("Cats example")
      .setDescription("The cats API description")
      .addBearerAuth()
      .setVersion("1.0")
      .addTag("cats")
      .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, documentFactory);

    app.useGlobalPipes(new ValidationPipe());

    await app.listen(PORT, () => {
      console.log(`server started at : http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();