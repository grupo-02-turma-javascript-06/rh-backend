import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CargoController } from "./controllers/cargo.controller";
import { Cargo } from "./entities/cargo.entity";
import { CargoService } from "./services/cargo.service";

@Module({
    controllers: [CargoController],
    providers: [CargoService],
    imports: [TypeOrmModule.forFeature([Cargo])],
    exports: [CargoService],
})
export class CargoModule {};