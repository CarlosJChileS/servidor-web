import { AppDataSource } from "./data-source";
import 'reflect-metadata';

// Función para inicializar la base de datos
// Esta función se encargará de establecer la conexión con la base de datos
export const initDatabase = async () => {
    try {
        // Inicializando la conexión a la base de datos
        await AppDataSource.initialize();
        console.log("Conexión a la base de datos establecida exitosamente.");
        return AppDataSource;
    } catch (ex) {
        console.error("Error al inicializar la base de datos:", ex);
        throw ex; // Relanzamos el error para que sea manejado en el lugar que se llame
    }
}
