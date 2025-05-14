import { AppDataSource } from '../data-source';
import { Grabacion } from '../models/Grabacion';

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
