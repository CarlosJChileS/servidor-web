import {
  CreateCalificacionDto,
  UpdateCalificacionDto,
  CalificacionDatasource,
  Calificacion,
  CalificacionRepository
} from '../../domain';

export class CalificacionRepositoryImpl implements CalificacionRepository {

  constructor(
    private readonly datasource: CalificacionDatasource,
  ) {}

  create(createCalificacionDto: CreateCalificacionDto): Promise<Calificacion> {
    return this.datasource.create(createCalificacionDto);
  }

  getAll(): Promise<Calificacion[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<Calificacion> {
    return this.datasource.findById(id);
  }

  update(updateCalificacionDto: UpdateCalificacionDto): Promise<Calificacion> {
    return this.datasource.update(updateCalificacionDto);
  }

  deleteById(id: number): Promise<Calificacion> {
    return this.datasource.deleteById(id);
  }

}
