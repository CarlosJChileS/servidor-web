import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrabacionService } from './grabacion.service';
import { GrabacionController } from './grabacion.controller';
import { Grabacion } from './entities/grabacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grabacion])],
  controllers: [GrabacionController],
  providers: [GrabacionService],
})
export class GrabacionModule {}
