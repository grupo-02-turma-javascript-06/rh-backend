import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name:"tb_colaboradores"})
export class Colaborador {

    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({nullable: false})
    data_nascimento: Date

    @UpdateDateColumn()
    data_admissao: Date

    @IsNotEmpty()
    @Column({type: 'decimal', precision: 10, scale:2})
    salario: number;
}