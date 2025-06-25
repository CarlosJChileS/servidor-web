import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrabacionService } from './grabacion.service';
import { CreateGrabacionDto } from './dto/create-grabacion.dto';
import { UpdateGrabacionDto } from './dto/update-grabacion.dto';

@Controller('grabacion')
export class GrabacionController {
  constructor(private readonly service: GrabacionService) {}

  @Post()
  create(@Body() dto: CreateGrabacionDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateGrabacionDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
