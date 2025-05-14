import { AppDataSource } from '../data-source';
import { DetalleCalificacion } from '../models/DetalleCalificacion';
import { Calificacion } from '../models/Calificacion';
import { CriterioEvaluacion } from '../models/CriterioEvaluacion';

export const insertarDetalleCalificacion = async (
    puntuacion: number,
    calificacionId: number,
    criterioId: number
) => {
    return AppDataSource.transaction(async transactionalEntityManager => {
        const calificacion = await transactionalEntityManager.findOne(Calificacion, {
            where: { id: calificacionId },
            lock: { mode: "pessimistic_write" }
        });

        const criterio = await transactionalEntityManager.findOne(CriterioEvaluacion, {
            where: { id: criterioId }
        });

        if (!calificacion) throw new Error("Calificación no encontrada");
        if (!criterio) throw new Error("Criterio no encontrado");

        const detalle = new DetalleCalificacion();
        detalle.puntuacion = puntuacion;
        detalle.calificacion = calificacion;
        detalle.criterio = criterio;

        return await transactionalEntityManager.save(detalle);
    });
};

// Nueva función para eliminar con transacción
export const eliminarDetalleCalificacion = async (id: number) => {
    return AppDataSource.transaction(async transactionalEntityManager => {
        const detalle = await transactionalEntityManager.findOne(DetalleCalificacion, {
            where: { id },
            relations: ['calificacion', 'criterio']
        });
        
        if (!detalle) throw new Error("Detalle no encontrado");
        
        return await transactionalEntityManager.remove(detalle);
    });
};