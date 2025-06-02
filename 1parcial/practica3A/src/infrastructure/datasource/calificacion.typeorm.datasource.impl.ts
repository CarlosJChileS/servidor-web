import { AppDataSource } from '../../data/typeorm/typeorm.config';
import { CalificacionTypeOrm } from '../../data/typeorm/mappers/calificacion.mapper';
import { Calificacion, CalificacionDatasource } from '../../domain';

export class CalificacionTypeOrmDatasourceImpl implements CalificacionDatasource {
  private repository = AppDataSource.getRepository(CalificacionTypeOrm);

  constructor() {
    if (!AppDataSource.isInitialized) {
      AppDataSource.initialize()
        .then(() => {
          console.log('TypeORM DataSource initialized!');
        })
        .catch(error => {
          console.error('Error initializing TypeORM:', error);
          throw error;
        });
    }
  }

  async create(calificacion: Calificacion): Promise<Calificacion> {
    if (!AppDataSource.isInitialized) await AppDataSource.initialize();
    const ormEntity = CalificacionTypeOrm.fromDomain(calificacion);
    const saved = await this.repository.save(ormEntity);
    return saved.toDomain();
  }

  async getAll(): Promise<Calificacion[]> {
    if (!AppDataSource.isInitialized) await AppDataSource.initialize();
    const all = await this.repository.find();
    return all.map(c => c.toDomain());
  }

  async findById(id: number): Promise<Calificacion> {
    if (!AppDataSource.isInitialized) await AppDataSource.initialize();
    const found = await this.repository.findOneBy({ id });
    if (!found) throw `Calificación with id ${id} not found`;
    return found.toDomain();
  }

  async update(calificacion: Calificacion): Promise<Calificacion> {
    if (!AppDataSource.isInitialized) await AppDataSource.initialize();
    await this.findById(calificacion.id);
    const ormEntity = CalificacionTypeOrm.fromDomain(calificacion);
    const updated = await this.repository.save(ormEntity);
    return updated.toDomain();
  }

  async deleteById(id: number): Promise<Calificacion> {
    if (!AppDataSource.isInitialized) await AppDataSource.initialize();
    const found = await this.findById(id);
    await this.repository.delete({ id });
    return found;
  }
}
