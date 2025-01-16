import { Module } from '@nestjs/common';
import { Colaborador } from './colaborador/entities/colaborador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradorModule } from './colaborador/colaborador.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_rhcolaboradores',
      entities: [Colaborador],
      synchronize: true,
    }),
    ColaboradorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
