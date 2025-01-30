import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Colaborador } from "../../colaborador/entities/colaborador.entity";

@Entity({ name: "tb_cargo" })
export class Cargo {
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    tipo: string

    @OneToMany(() => Colaborador, (colaborador) => colaborador.cargo)
    colaborador: Colaborador[]

}