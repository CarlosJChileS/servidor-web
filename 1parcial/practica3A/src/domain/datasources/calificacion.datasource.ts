import { CreateCalificacionDto } from '../dtos/calificacion/create-calificacion.dto';
import { UpdateCalificacionDto } from '../dtos/calificacion/update-calificacion.dto';
import { Calificacion } from '../entities/Calificacion.entity';

export abstract class CalificacionDatasource {
  abstract create(createCalificacionDto: CreateCalificacionDto): Promise<Calificacion>;
  abstract getAll(): Promise<Calificacion[]>;
  abstract findById(id: number): Promise<Calificacion>;
  abstract update(updateCalificacionDto: UpdateCalificacionDto): Promise<Calificacion>;
  abstract deleteById(id: number): Promise<Calificacion>;
}
