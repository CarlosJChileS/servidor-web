import { CalificacionRepository } from '../../../domain/repositories/calificacion.repository';
import { Calificacion } from '../../../domain/entities/Calificacion.entity';
import { AppDataSource } from '../typeorm.config';
import { CalificacionTypeOrm } from '../mappers/calificacion.mapper';

export class CalificacionTypeOrmRepository implements CalificacionRepository {
  private repo = AppDataSource.getRepository(CalificacionTypeOrm);

  async create(entity: Calificacion): Promise<Calificacion> {
    const ormEntity = CalificacionTypeOrm.fromDomain(entity);
    // El id lo asigna la base de datos al guardar
    const saved = await this.repo.save(ormEntity);
    return saved.toDomain();
  }

  async findById(id: number): Promise<Calificacion | null> {
    const orm = await this.repo.findOneBy({ id });
    if (!orm) return null;
    return orm.toDomain();
  }

  async findAll(): Promise<Calificacion[]> {
    const all = await this.repo.find();
    return all.map(c => c.toDomain());
  }

  async update(entity: Calificacion): Promise<Calificacion> {
    // Actualiza solo los campos proporcionados (puedes personalizar)
    const ormEntity = CalificacionTypeOrm.fromDomain(entity);
    await this.repo.save(ormEntity);
    return ormEntity.toDomain();
  }

  async deleteById(id: number): Promise<Calificacion> {
    const orm = await this.repo.findOneBy({ id });
    if (!orm) throw new Error('Calificacion not found');
    await this.repo.delete(id);
    return orm.toDomain();
  }
}
