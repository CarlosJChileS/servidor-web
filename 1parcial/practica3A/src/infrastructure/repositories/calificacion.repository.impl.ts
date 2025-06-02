import {
  CreateCalificacionDto,
  Calificacion,
  CalificacionDatasource,
  CalificacionRepository
} from '../../domain';

export class CalificacionRepositoryImpl implements CalificacionRepository {
  constructor(private readonly datasource: CalificacionDatasource) {}

  create(createCalificacionDto: CreateCalificacionDto): Promise<Calificacion> {
    return this.datasource.create(createCalificacionDto);
  }

  findAll(): Promise<Calificacion[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<Calificacion> {
    return this.datasource.findById(id);
  }

  update(calificacion: Calificacion): Promise<Calificacion> {
    return this.datasource.update(calificacion);
  }

  deleteById(id: number): Promise<Calificacion> {
    return this.datasource.deleteById(id);
  }
}
