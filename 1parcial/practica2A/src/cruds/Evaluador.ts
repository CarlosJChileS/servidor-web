import { AppDataSource } from '../data-source';
import { Evaluador } from '../models/Evaluador';

export const insertarEvaluador = async (nombre: string, correo: string, especialidad: string) => {
    const evaluador = new Evaluador();
    evaluador.nombre = nombre;
    evaluador.correo = correo;
    evaluador.especialidad = especialidad;
    return await AppDataSource.manager.save(evaluador);
};

export const obtenerEvaluadores = async () => {
    return await AppDataSource.manager.find(Evaluador);
};

export const obtenerEvaluador = async (id: number) => {
    return await AppDataSource.manager.findOne(Evaluador, { where: { id } });
};

export const actualizarEvaluador = async (id: number, nombre: string, correo: string, especialidad: string) => {
    const evaluador = await obtenerEvaluador(id);
    if (evaluador) {
        evaluador.nombre = nombre;
        evaluador.correo = correo;
        evaluador.especialidad = especialidad;
        return await AppDataSource.manager.save(evaluador);
    }
    return null;
};

export const eliminarEvaluador = async (id: number) => {
    const evaluador = await obtenerEvaluador(id);
    if (evaluador) {
        return await AppDataSource.manager.remove(evaluador);
    }
    return null;
};
