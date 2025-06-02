import { Sequelize } from 'sequelize';
import { initCalificacionModel } from './models/calificacion.model';

export const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'postgres', // O 'mysql' según tu BD
  logging: false,
});

initCalificacionModel(sequelize);
