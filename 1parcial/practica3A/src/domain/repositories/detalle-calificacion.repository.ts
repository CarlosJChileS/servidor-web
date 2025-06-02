// src/domain/repositories/detalle-calificacion.repository.ts
import { DetalleCalificacion } from '../entities/DetalleCalificacion.entity';

export abstract class DetalleCalificacionRepository {
  abstract create(detalle: DetalleCalificacion): Promise<DetalleCalificacion>;
  abstract findById(id: number): Promise<DetalleCalificacion | null>;
  abstract findAll(): Promise<DetalleCalificacion[]>;
  abstract update(detalle: DetalleCalificacion): Promise<DetalleCalificacion>;
  abstract deleteById(id: number): Promise<void>;
}
