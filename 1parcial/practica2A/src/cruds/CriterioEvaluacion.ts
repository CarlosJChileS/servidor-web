import { AppDataSource } from '../data-source';
import { CriterioEvaluacion } from '../models/CriterioEvaluacion';

export const insertarCriterioEvaluacion = async (nombre: string, descripcion: string) => {
    const criterio = new CriterioEvaluacion();
    criterio.nombre = nombre;
    criterio.descripcion = descripcion;
    return await AppDataSource.manager.save(criterio);
};

export const obtenerCriterioEvaluacion = async (id: number) => {
    return await AppDataSource.manager.findOne(CriterioEvaluacion, { where: { id } });
};
