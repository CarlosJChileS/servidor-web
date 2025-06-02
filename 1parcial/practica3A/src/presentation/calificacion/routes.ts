import { Router } from 'express';
import { CalificacionController } from './controller';
import { DatasourceConfig, DatasourceType } from '../../infrastructure/datasource/datasource.config';
import { CalificacionRepositoryImpl } from '../../infrastructure/repositories/calificacion.repository.impl';

export class CalificacionRoutes {
    static get routes(): Router {
        const router = Router();

        // Usar el datasource configurado (por ejemplo, TYPEORM o SEQUELIZE)
        const datasource = DatasourceConfig.getDatasource(DatasourceType.TYPEORM);
        const calificacionRepository = new CalificacionRepositoryImpl(datasource);
        
        const calificacionController = new CalificacionController(calificacionRepository);

        router.get('/', calificacionController.getCalificaciones);
        router.get('/:id', calificacionController.getCalificacionById);
        router.post('/', calificacionController.createCalificacion);
        router.put('/:id', calificacionController.updateCalificacion);
        router.delete('/:id', calificacionController.deleteCalificacion);

        return router;
    }
}
