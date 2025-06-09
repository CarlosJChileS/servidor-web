import { DetalleCalificacion } from '../../entities/evaluacion/detalle-calificacion.entity';

export abstract class DetalleCalificacionDatasource {
  abstract create(detalle: DetalleCalificacion): Promise<DetalleCalificacion>;
  abstract getAll(): Promise<DetalleCalificacion[]>;
  abstract findById(id: number): Promise<DetalleCalificacion>;
  abstract update(detalle: DetalleCalificacion): Promise<DetalleCalificacion>;
  abstract deleteById(id: number): Promise<DetalleCalificacion>;
}
