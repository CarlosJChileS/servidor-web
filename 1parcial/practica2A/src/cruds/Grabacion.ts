import { AppDataSource } from '../data-source';
import { Grabacion } from '../models/Grabacion';

export const insertarGrabacion = async (titulo: string, descripcion: string, fecha: Date, url: string) => {
    const grabacion1 = new Grabacion();
    grabacion1.titulo = titulo;
    grabacion1.descripcion = descripcion;
    grabacion1.fecha = fecha;
    grabacion1.url = url;
    return await AppDataSource.manager.save(grabacion1);
};

export const obtenerGrabaciones = async () => {
    return await AppDataSource.manager.find(Grabacion);
};

export const obtenerGrabacion = async (id: number) => {
    return await AppDataSource.manager.findOne(Grabacion, { 
        where: { id } 
    });
};

export const actualizarGrabacion = async (id: number, titulo: string, descripcion: string, fecha: Date, url: string) => {
    const grabacion2 = await obtenerGrabacion(id);
    if (grabacion2) {
        grabacion2.titulo = titulo;
        grabacion2.descripcion = descripcion;
        grabacion2.fecha = fecha;
        grabacion2.url = url;
        return await AppDataSource.manager.save(grabacion2);
    }
    return null;
};

export const eliminarGrabacion = async (id: number) => {
    const grabacion2 = await obtenerGrabacion(id);
    if (grabacion2) {
        return await AppDataSource.manager.remove(grabacion2);
    }
    return null;
};