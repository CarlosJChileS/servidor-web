import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalificacionService } from './calificacion.service';
import { CreateCalificacionDto } from './dto/create-calificacion.dto';
import { UpdateCalificacionDto } from './dto/update-calificacion.dto';

@Controller('calificacion')
export class CalificacionController {
  constructor(private readonly service: CalificacionService) {}

  @Post()
  create(@Body() dto: CreateCalificacionDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCalificacionDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
