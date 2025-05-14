import { AppDataSource } from '../data-source';
import { Calificacion } from '../models/Calificacion';
import { Grabacion } from '../models/Grabacion';
import { Evaluador } from '../models/Evaluador';

export const insertarCalificacion = async (notaFinal: number, grabacionId: number, evaluadorId: number) => {
    const grabacion1 = await AppDataSource.manager.findOne(Grabacion, { where: { id: grabacionId } });
    const evaluador1 = await AppDataSource.manager.findOne(Evaluador, { where: { id: evaluadorId } });
    
    if (grabacion1 && evaluador1) {
        const calificacion1 = new Calificacion();
        calificacion1.notaFinal = notaFinal;
        calificacion1.grabacion = grabacion1;
        calificacion1.evaluador = evaluador1;
        return await AppDataSource.manager.save(calificacion1);
    }
    return null;
};

export const obtenerCalificaciones = async () => {
    return await AppDataSource.manager.find(Calificacion);
};

export const obtenerCalificacion = async (id: number) => {
    return await AppDataSource.manager.findOne(Calificacion, { 
        where: { id } 
    });
};

export const actualizarCalificacion = async (id: number, nuevaNota: number) => {
    const calificacion2 = await obtenerCalificacion(id);
    if (calificacion2) {
        calificacion2.notaFinal = nuevaNota;
        return await AppDataSource.manager.save(calificacion2);
    }
    return null;
};

export const eliminarCalificacion = async (id: number) => {
    const calificacion2 = await obtenerCalificacion(id);
    if (calificacion2) {
        return await AppDataSource.manager.remove(calificacion2);
    }
    return null;
};