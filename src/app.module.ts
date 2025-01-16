import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Colaborador } from './colaborador/entities/colaborador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradorModule } from './colaborador/colaborador.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_rhColaboradores',
      entities: [Colaborador],
      synchronize: true,
    }),
    ColaboradorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
