import { AppDataSource } from './data-source';
import { Grabacion } from './models/Grabacion';
import { Evaluador } from './models/Evaluador';
import { Calificacion } from './models/Calificacion';
import { DetalleCalificacion } from './models/DetalleCalificacion';
import { CriterioEvaluacion } from './models/CriterioEvaluacion';

// CRUD para Grabación
export const insertarGrabacion = async (titulo: string, descripcion: string, fecha: Date, url: string) => {
    const grabacion = new Grabacion();
    grabacion.titulo = titulo;
    grabacion.descripcion = descripcion;
    grabacion.fecha = fecha;
    grabacion.url = url;
    return await AppDataSource.manager.save(grabacion);
};

export const obtenerGrabaciones = async () => {
    return await AppDataSource.manager.find(Grabacion);
};

export const obtenerGrabacion = async (id: number) => {
    return await AppDataSource.manager.findOne(Grabacion, { where: { id } });
};

export const actualizarGrabacion = async (id: number, titulo: string, descripcion: string, fecha: Date, url: string) => {
    const grabacion = await obtenerGrabacion(id);
    if (grabacion) {
        grabacion.titulo = titulo;
        grabacion.descripcion = descripcion;
        grabacion.fecha = fecha;
        grabacion.url = url;
        return await AppDataSource.manager.save(grabacion);
    }
    return null;
};

export const eliminarGrabacion = async (id: number) => {
    const grabacion = await obtenerGrabacion(id);
    if (grabacion) {
        return await AppDataSource.manager.remove(grabacion);
    }
    return null;
};

// CRUD para Evaluador
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

// CRUD para Calificación
export const insertarCalificacion = async (notaFinal: number, grabacionId: number, evaluadorId: number) => {
    const grabacion = await obtenerGrabacion(grabacionId);
    const evaluador = await obtenerEvaluador(evaluadorId);
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

// CRUD para Criterio de Evaluación

export const insertarCriterioEvaluacion = async (nombre: string, descripcion: string) => {
    const criterio = new CriterioEvaluacion();
    criterio.nombre = nombre;
    criterio.descripcion = descripcion;
    return await AppDataSource.manager.save(criterio);
};

export const obtenerCriterioEvaluacion = async (id: number) => {
    return await AppDataSource.manager.findOne(CriterioEvaluacion, { where: { id } });
};

// CRUD para Detalle de Calificación
export const insertarDetalleCalificacion = async (puntuacion: number, calificacionId: number, criterioId: number) => {
    const calificacion = await obtenerCalificacion(calificacionId);
    const criterio = await obtenerCriterioEvaluacion(criterioId);
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
