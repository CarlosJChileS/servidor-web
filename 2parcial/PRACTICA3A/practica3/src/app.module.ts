import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './feedback/entities/feedback.entity';
import { Grabacion } from './grabacion/entities/grabacion.entity';
import { Metrica } from './metrica/entities/metrica.entity';
import { FeedbackModule } from './feedback/feedback.module';
import { GrabacionModule } from './grabacion/grabacion.module';
import { MetricaModule } from './metrica/metrica.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'app.db',
      entities: [Feedback, Grabacion, Metrica],
      synchronize: true,
    }),
    FeedbackModule,
    GrabacionModule,
    MetricaModule,
  ],
})
export class AppModule {}
