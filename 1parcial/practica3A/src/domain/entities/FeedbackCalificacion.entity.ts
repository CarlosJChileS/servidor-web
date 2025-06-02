import { Calificacion } from './Calificacion.entity';

export class FeedbackCalificacion {
  constructor(
    public id: number,
    public calificacion: Calificacion,
    public observacion: string,
    public fecha: Date,
    public autor: string
  ) {}

  public static fromObject(object: { [key: string]: any }): FeedbackCalificacion {
    const { id, calificacion, observacion, fecha, autor } = object;
    if (!id) throw 'id is required';

    return new FeedbackCalificacion(
      id,
      Calificacion.fromObject(calificacion),
      observacion,
      fecha ? new Date(fecha) : new Date(),
      autor
    );
  }
}
