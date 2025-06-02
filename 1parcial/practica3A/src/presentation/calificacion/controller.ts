import { Request, Response } from 'express';
import { CreateCalificacionDto } from '../../domain/dtos/calificacion/create-calificacion.dto';
import { UpdateCalificacionDto } from '../../domain/dtos/calificacion/update-calificacion.dto';
import { CreateCalificacion } from '../../domain/use-cases/calificacion/create-calificacion';
import { DeleteCalificacion } from '../../domain/use-cases/calificacion/delete-calificacion';
import { GetCalificacion } from '../../domain/use-cases/calificacion/get-calificacion';
import { GetCalificaciones } from '../../domain/use-cases/calificacion/get-calificaciones';
import { UpdateCalificacion } from '../../domain/use-cases/calificacion/update-calificacion';
import { CalificacionRepository } from '../../domain/repositories/calificacion.repository';

export class CalificacionController {
  constructor(
    private readonly calificacionRepository: CalificacionRepository,
  ) {}

  public getCalificaciones = (req: Request, res: Response) => {
    new GetCalificaciones(this.calificacionRepository)
      .execute()
      .then((list: any[]) => res.json(list))
      .catch((error: any) => res.status(400).json({ error }));
  };

  public getCalificacionById = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetCalificacion(this.calificacionRepository)
      .execute(id)
      .then((calificacion: any) => res.json(calificacion))
      .catch((error: any) => res.status(400).json({ error }));
  };

  public createCalificacion = (req: Request, res: Response) => {
    const [error, dto] = CreateCalificacionDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateCalificacion(this.calificacionRepository)
      .execute(dto!)
      .then((created: any) => res.json(created))
      .catch((error: any) => res.status(400).json({ error }));
  };

  public updateCalificacion = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, dto] = UpdateCalificacionDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    new UpdateCalificacion(this.calificacionRepository)
      .execute(dto!)
      .then((updated: any) => res.json(updated))
      .catch((error: any) => res.status(400).json({ error }));
  };

  public deleteCalificacion = (req: Request, res: Response) => {
    const id = +req.params.id;
    new DeleteCalificacion(this.calificacionRepository)
      .execute(id)
      .then((deleted: any) => res.json(deleted))
      .catch((error: any) => res.status(400).json({ error }));
  };
}
