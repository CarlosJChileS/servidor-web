import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrabacionService } from './grabacion.service';
import { GrabacionResolver } from './grabacion.resolver';
import { Grabacion } from './entities/grabacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grabacion])],
  providers: [GrabacionResolver, GrabacionService],
  exports: [TypeOrmModule],
})
export class GrabacionModule {}
