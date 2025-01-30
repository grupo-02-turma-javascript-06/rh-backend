import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CargoService } from "../services/cargo.service";
import { Cargo } from "../entities/cargo.entity";

@Controller("/cargos")
export class CargoController {
    constructor(private readonly cargoService:
    CargoService) { }

    @Get( )
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Cargo[]> {
        return this.cargoService.findAll();
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number):
    Promise<Cargo> {
        return this.cargoService. findById(id);
    }
    @Get('/tipo/:tipo')
    @HttpCode(HttpStatus.OK)
    findByTipo(@Param('tipo') tipo: string):
    Promise<Cargo[]>{ 
        return this.cargoService.findByTipo(tipo)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() cargo: Cargo):
    Promise<Cargo> {
        return this.cargoService.create
        (cargo);
    }
      @Put()
        @HttpCode(HttpStatus.OK)
        update(@Body() cargo: Cargo): Promise<Cargo> {
            return this.cargoService.update(cargo);
        }
        @Delete('/:id')
        @HttpCode(HttpStatus.NO_CONTENT)
        delete(@Param('id', ParseIntPipe) id: number){
            return this.cargoService.delete(id);
        }



}