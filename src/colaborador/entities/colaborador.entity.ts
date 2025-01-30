import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Cargo } from '../../cargo/entities/cargo.entity';

@Entity({ name: 'tb_colaboradores' })
export class Colaborador {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ nullable: false })
  data_nascimento: Date;

  @UpdateDateColumn()
  data_admissao: Date;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salario: number;

  @ManyToOne(() => Cargo, (cargo) => cargo.colaborador, {
    onDelete: "CASCADE"
 })
 cargo: Cargo
}