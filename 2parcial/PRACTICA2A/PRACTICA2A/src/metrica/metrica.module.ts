import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetricaService } from './metrica.service';
import { MetricaResolver } from './metrica.resolver';
import { Metrica } from './entities/metrica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Metrica])],
  providers: [MetricaResolver, MetricaService],
  exports: [TypeOrmModule],
})
export class MetricaModule {}
