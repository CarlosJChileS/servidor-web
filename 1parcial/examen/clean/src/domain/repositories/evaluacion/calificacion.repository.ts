import { Calificacion } from '../../entities/evaluacion/calificacion.entity';

export abstract class CalificacionRepository {
  abstract create(calificacion: Calificacion): Promise<Calificacion>;
  abstract getAll(): Promise<Calificacion[]>;
  abstract findById(id: number): Promise<Calificacion>;
  abstract update(calificacion: Calificacion): Promise<Calificacion>;
  abstract deleteById(id: number): Promise<Calificacion>;
}
