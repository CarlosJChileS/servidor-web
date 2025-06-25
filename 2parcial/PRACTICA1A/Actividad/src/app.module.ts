import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalificacionModule } from './calificacion/calificacion.module';
import { EvaluadorModule } from './evaluador/evaluador.module';
import { GrabacionModule } from './grabacion/grabacion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CalificacionModule,
    EvaluadorModule,
    GrabacionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
