import {
  CreateCalificacionDto,
  UpdateCalificacionDto,
  CalificacionEntity,
  CalificacionDatasource,
  CalificacionRepository
} from '../../domain';

export class CalificacionRepositoryImpl implements CalificacionRepository {

  constructor(
    private readonly datasource: CalificacionDatasource,
  ) {}

  create(createCalificacionDto: CreateCalificacionDto): Promise<CalificacionEntity> {
    return this.datasource.create(createCalificacionDto);
  }

  getAll(): Promise<CalificacionEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<CalificacionEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateCalificacionDto: UpdateCalificacionDto): Promise<CalificacionEntity> {
    return this.datasource.updateById(updateCalificacionDto);
  }

  deleteById(id: number): Promise<CalificacionEntity> {
    return this.datasource.deleteById(id);
  }

}
