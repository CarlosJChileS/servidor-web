import { CalificacionRepository } from '../../../domain/repositories/calificacion.repository';
import { Calificacion } from '../../../domain/entities/Calificacion.entity';
import { CalificacionModel } from '../models/calificacion.model';

export class CalificacionSequelizeRepository implements CalificacionRepository {
  async create(entity: Calificacion): Promise<Calificacion> {
    const created = await CalificacionModel.create({
      grabacionId: entity.grabacionId,
      usuarioId: entity.usuarioId,
      puntajeGlobal: entity.puntajeGlobal,
      observacionGlobal: entity.observacionGlobal,
      tipoCalificacion: entity.tipoCalificacion,
      fecha: entity.fecha,
    });
    return new Calificacion(
      created.id,
      created.grabacionId,
      created.usuarioId,
      Number(created.puntajeGlobal),
      created.observacionGlobal,
      created.tipoCalificacion,
      created.fecha
    );
  }

  async findById(id: number): Promise<Calificacion | null> {
    const found = await CalificacionModel.findByPk(id);
    if (!found) return null;
    return new Calificacion(
      found.id,
      found.grabacionId,
      found.usuarioId,
      Number(found.puntajeGlobal),
      found.observacionGlobal,
      found.tipoCalificacion,
      found.fecha
    );
  }

  async findAll(): Promise<Calificacion[]> {
    const all = await CalificacionModel.findAll();
    return all.map(c => new Calificacion(
      c.id,
      c.grabacionId,
      c.usuarioId,
      Number(c.puntajeGlobal),
      c.observacionGlobal,
      c.tipoCalificacion,
      c.fecha
    ));
  }

  async update(entity: Calificacion): Promise<Calificacion> {
    const found = await CalificacionModel.findByPk(entity.id);
    if (!found) throw new Error('Calificacion not found');
    await found.update({
      grabacionId: entity.grabacionId,
      usuarioId: entity.usuarioId,
      puntajeGlobal: entity.puntajeGlobal,
      observacionGlobal: entity.observacionGlobal,
      tipoCalificacion: entity.tipoCalificacion,
      fecha: entity.fecha,
    });
    return new Calificacion(
      found.id,
      found.grabacionId,
      found.usuarioId,
      Number(found.puntajeGlobal),
      found.observacionGlobal,
      found.tipoCalificacion,
      found.fecha
    );
  }

  async deleteById(id: number): Promise<Calificacion> {
    const found = await CalificacionModel.findByPk(id);
    if (!found) throw new Error('Calificacion not found');
    await found.destroy();
    return new Calificacion(
      found.id,
      found.grabacionId,
      found.usuarioId,
      Number(found.puntajeGlobal),
      found.observacionGlobal,
      found.tipoCalificacion,
      found.fecha
    );
  }
}
