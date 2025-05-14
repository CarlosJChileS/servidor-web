import { AppDataSource } from '../data-source';
import { DetalleCalificacion } from '../models/DetalleCalificacion';
import { Calificacion } from '../models/Calificacion';
import { CriterioEvaluacion } from '../models/CriterioEvaluacion';

export const insertarDetalleCalificacion = async (puntuacion: number, calificacionId: number, criterioId: number) => {
    const calificacion = await AppDataSource.manager.findOne(Calificacion, { where: { id: calificacionId } });
    const criterio = await AppDataSource.manager.findOne(CriterioEvaluacion, { where: { id: criterioId } });
    if (calificacion && criterio) {
        const detalle = new DetalleCalificacion();
        detalle.puntuacion = puntuacion;
        detalle.calificacion = calificacion;
        detalle.criterio = criterio;
        return await AppDataSource.manager.save(detalle);
    }
    return null;
};

export const obtenerDetallesCalificacion = async () => {
    return await AppDataSource.manager.find(DetalleCalificacion, { relations: ['calificacion', 'criterio'] });
};
