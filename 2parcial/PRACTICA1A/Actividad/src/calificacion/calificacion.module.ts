import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalificacionService } from './calificacion.service';
import { CalificacionController } from './calificacion.controller';
import { Calificacion } from './entities/calificacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Calificacion])],
  controllers: [CalificacionController],
  providers: [CalificacionService],
})
export class CalificacionModule {}
