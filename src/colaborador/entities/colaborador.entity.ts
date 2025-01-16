import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_colaboradores' })
export class Colaborador {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ nullable: false })
  data_nascimento: Date;

  @UpdateDateColumn()
  data_admissao: Date;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salario: number;
}
