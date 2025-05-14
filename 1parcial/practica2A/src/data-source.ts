import "reflect-metadata";
import { DataSource } from "typeorm";
import { Calificacion } from "./models/Calificacion";
import { CriterioEvaluacion } from "./models/CriterioEvaluacion";
import { DetalleCalificacion } from "./models/DetalleCalificacion";
import { Evaluador } from "./models/Evaluador";
import { Grabacion } from "./models/Grabacion";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Cjchs123@", 
    database: "sistema_calificaciones",
    synchronize: true, // Solo en desarrollo
    logging: true,
    entities: [
        Calificacion,
        CriterioEvaluacion,
        DetalleCalificacion,
        Evaluador,
        Grabacion
    ],
    migrations: [],
    subscribers: [],
    extra: {
        connectionLimit: 5
    }
});