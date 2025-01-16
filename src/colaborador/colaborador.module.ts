import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colaborador } from './entities/colaborador.entity';
import { ColaboradorService } from './services/colaborador.service';

@Module({
  imports: [TypeOrmModule.forFeature([Colaborador])],
  providers: [ColaboradorService],
  controllers: [],
  exports: [TypeOrmModule],
})
export class ColaboradorModule {}
