import { AppDataSource } from '../data-source';
import { Calificacion } from '../models/Calificacion';
import { Grabacion } from '../models/Grabacion';
import { Evaluador } from '../models/Evaluador';

export const insertarCalificacion = async (notaFinal: number, grabacionId: number, evaluadorId: number) => {
    const grabacion = await AppDataSource.manager.findOne(Grabacion, { where: { id: grabacionId } });
    const evaluador = await AppDataSource.manager.findOne(Evaluador, { where: { id: evaluadorId } });
    if (grabacion && evaluador) {
        const calificacion = new Calificacion();
        calificacion.notaFinal = notaFinal;
        calificacion.grabacion = grabacion;
        calificacion.evaluador = evaluador;
        return await AppDataSource.manager.save(calificacion);
    }
    return null;
};

export const obtenerCalificaciones = async () => {
    return await AppDataSource.manager.find(Calificacion, { relations: ['grabacion', 'evaluador'] });
};

export const obtenerCalificacion = async (id: number) => {
    return await AppDataSource.manager.findOne(Calificacion, { where: { id }, relations: ['grabacion', 'evaluador'] });
};

export const eliminarCalificacion = async (id: number) => {
    const calificacion = await obtenerCalificacion(id);
    if (calificacion) {
        return await AppDataSource.manager.remove(calificacion);
    }
    return null;
};
