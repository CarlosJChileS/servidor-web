import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluadorService } from './evaluador.service';
import { EvaluadorController } from './evaluador.controller';
import { Evaluador } from './entities/evaluador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluador])],
  controllers: [EvaluadorController],
  providers: [EvaluadorService],
})
export class EvaluadorModule {}
