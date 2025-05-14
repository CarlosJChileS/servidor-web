import { AppDataSource } from '../data-source';
import { Evaluador } from '../models/Evaluador';

export const insertarEvaluador = async (nombre: string, correo: string, especialidad: string) => {
    const evaluador1 = new Evaluador();
    evaluador1.nombre = nombre;
    evaluador1.correo = correo;
    evaluador1.especialidad = especialidad;
    return await AppDataSource.manager.save(evaluador1);
};

export const obtenerEvaluadores = async () => {
    return await AppDataSource.manager.find(Evaluador);
};

export const obtenerEvaluador = async (id: number) => {
    return await AppDataSource.manager.findOne(Evaluador, { 
        where: { id } 
    });
};

export const actualizarEvaluador = async (id: number, nombre: string, correo: string, especialidad: string) => {
    const evaluador2 = await obtenerEvaluador(id);
    if (evaluador2) {
        evaluador2.nombre = nombre;
        evaluador2.correo = correo;
        evaluador2.especialidad = especialidad;
        return await AppDataSource.manager.save(evaluador2);
    }
    return null;
};

export const eliminarEvaluador = async (id: number) => {
    const evaluador2 = await obtenerEvaluador(id);
    if (evaluador2) {
        return await AppDataSource.manager.remove(evaluador2);
    }
    return null;
};