import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colaborador } from './entities/colaborador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Colaborador])],
  providers: [],
  controllers: [],
  exports: [TypeOrmModule],
})
export class ColaboradorModule {}