// src/domain/repositories/calificacion.repository.ts
import { Calificacion } from '../entities/Calificacion.entity';

export abstract class CalificacionRepository {
  abstract create(calificacion: Calificacion): Promise<Calificacion>;
  abstract findById(id: number): Promise<Calificacion | null>;
  abstract findAll(): Promise<Calificacion[]>;
  abstract update(calificacion: Calificacion): Promise<Calificacion>;
  abstract deleteById(id: number): Promise<Calificacion>;

}
