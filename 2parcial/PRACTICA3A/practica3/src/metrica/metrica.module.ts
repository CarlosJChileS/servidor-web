import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metrica } from './entities/metrica.entity';
import { MetricaService } from './metrica.service';
import { MetricaGateway } from './metrica.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Metrica])],
  providers: [MetricaService, MetricaGateway],
})
export class MetricaModule {}
