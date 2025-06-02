import { Calificacion } from './Calificacion.entity';
import { CriterioEvaluacion } from './CriterioEvaluacion.entity';

export class DetalleCalificacion {
  constructor(
    public id: number,
    public calificacion: Calificacion,
    public criterio: CriterioEvaluacion,
    public slideId: number,
    public puntaje: number,
    public comentario: string,
    public fragmentoAudioId: number | null
  ) {}

  public static fromObject(object: { [key: string]: any }): DetalleCalificacion {
    const {
      id,
      calificacion,
      criterio,
      slideId,
      puntaje,
      comentario,
      fragmentoAudioId
    } = object;

    if (!id) throw 'id is required';

    return new DetalleCalificacion(
      id,
      Calificacion.fromObject(calificacion),
      CriterioEvaluacion.fromObject(criterio),
      slideId,
      puntaje,
      comentario,
      fragmentoAudioId ?? null
    );
  }
}
