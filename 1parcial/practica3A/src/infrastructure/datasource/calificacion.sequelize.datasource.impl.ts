import { sequelize } from '../../data/sequelize/sequelize';
import { CalificacionModel } from '../../data/sequelize/models/calificacion.model';
import { Calificacion, CalificacionDatasource } from '../../domain';

export class CalificacionSequelizeDatasourceImpl implements CalificacionDatasource {

  async create(calificacion: Calificacion): Promise<Calificacion> {
    const created = await CalificacionModel.create({
      grabacionId: calificacion.grabacionId,
      usuarioId: calificacion.usuarioId,
      puntajeGlobal: calificacion.puntajeGlobal,
      observacionGlobal: calificacion.observacionGlobal,
      tipoCalificacion: calificacion.tipoCalificacion,
      fecha: calificacion.fecha,
    });
    return Calificacion.fromObject(created);
  }

  async getAll(): Promise<Calificacion[]> {
    const all = await CalificacionModel.findAll();
    return all.map(c => Calificacion.fromObject(c));
  }

  async findById(id: number): Promise<Calificacion> {
    const found = await CalificacionModel.findByPk(id);
    if (!found) throw new Error(`Calificación with id ${id} not found`);
    return Calificacion.fromObject(found);
  }

  async update(calificacion: Calificacion): Promise<Calificacion> {
    const found = await CalificacionModel.findByPk(calificacion.id);
    if (!found) throw new Error(`Calificación with id ${calificacion.id} not found`);
    await found.update({
      grabacionId: calificacion.grabacionId,
      usuarioId: calificacion.usuarioId,
      puntajeGlobal: calificacion.puntajeGlobal,
      observacionGlobal: calificacion.observacionGlobal,
      tipoCalificacion: calificacion.tipoCalificacion,
      fecha: calificacion.fecha,
    });
    return Calificacion.fromObject(found);
  }

  async deleteById(id: number): Promise<Calificacion> {
    const found = await this.findById(id);
    await CalificacionModel.destroy({ where: { id } });
    return found;
  }
}
