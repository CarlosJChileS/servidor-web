import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { TodoTypeOrm } from './mappers/todo.mapper';
import { CalificacionTypeOrm } from './mappers/calificacion.mapper'; // <-- Asegúrate que la ruta y el nombre son correctos

config(); // Carga las variables de entorno

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.POSTGRES_URL,
    synchronize: true, // En desarrollo usa true, en producción debe ser false
    logging: process.env.NODE_ENV === 'development',
    entities: [
        TodoTypeOrm,
        CalificacionTypeOrm, // <-- ¡Tu entidad de Calificación!
    ],
    migrations: ['src/data/typeorm/migrations/**/*.ts'],
    subscribers: ['src/data/typeorm/subscribers/**/*.ts'],
});

// Para inicializar la conexión
export const initializeTypeORM = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Data Source has been initialized!');
    } catch (error) {
        console.error('Error during Data Source initialization:', error);
        throw error;
    }
};
