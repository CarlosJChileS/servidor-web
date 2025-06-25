import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluadorService } from './evaluador.service';
import { CreateEvaluadorDto } from './dto/create-evaluador.dto';
import { UpdateEvaluadorDto } from './dto/update-evaluador.dto';

@Controller('evaluador')
export class EvaluadorController {
  constructor(private readonly service: EvaluadorService) {}

  @Post()
  create(@Body() dto: CreateEvaluadorDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateEvaluadorDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
