import { Router } from 'express';
import { CalificacionRoutes } from './calificacion/routes';


export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/api/calificaciones', CalificacionRoutes.routes);

    return router;
  }
}
