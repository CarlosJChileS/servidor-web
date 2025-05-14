import { AppDataSource } from '../data-source';
import { CriterioEvaluacion } from '../models/CriterioEvaluacion';

export const insertarCriterioEvaluacion = async (nombre: string, descripcion: string) => {
    const criterio1 = new CriterioEvaluacion();
    criterio1.nombre = nombre;
    criterio1.descripcion = descripcion;
    return await AppDataSource.manager.save(criterio1);
};

export const obtenerCriterios = async () => {
    return await AppDataSource.manager.find(CriterioEvaluacion);
};

export const obtenerCriterioEvaluacion = async (id: number) => {
    return await AppDataSource.manager.findOne(CriterioEvaluacion, { 
        where: { id } 
    });
};

export const actualizarCriterioEvaluacion = async (id: number, nuevoNombre: string, nuevaDescripcion: string) => {
    const criterio2 = await obtenerCriterioEvaluacion(id);
    if (criterio2) {
        criterio2.nombre = nuevoNombre;
        criterio2.descripcion = nuevaDescripcion;
        return await AppDataSource.manager.save(criterio2);
    }
    return null;
};

export const eliminarCriterioEvaluacion = async (id: number) => {
    const criterio2 = await obtenerCriterioEvaluacion(id);
    if (criterio2) {
        return await AppDataSource.manager.remove(criterio2);
    }
    return null;
};