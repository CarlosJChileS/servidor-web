import { Calificacion } from './calificacion.entity';
import { CriterioEvaluacion } from './criterio-evaluacion.entity';

export class DetalleCalificacion {
  constructor(
    public id: number,
    public calificacion: Calificacion,
    public criterioEvaluacion: CriterioEvaluacion,
    public flashcardId: number,
    public puntaje: number,
    public comentario: string,
    public tiempoRespuesta: number,
  ) {}

  static fromObject(obj: Record<string, any>): DetalleCalificacion {
    const {
      id,
      calificacion,
      criterioEvaluacion,
      flashcardId,
      puntaje,
      comentario,
      tiempoRespuesta,
    } = obj;

    if (id === undefined) throw 'id is required';
    if (!calificacion) throw 'calificacion is required';
    if (!criterioEvaluacion) throw 'criterioEvaluacion is required';
    if (flashcardId === undefined) throw 'flashcardId is required';
    if (puntaje === undefined) throw 'puntaje is required';
    if (tiempoRespuesta === undefined) throw 'tiempoRespuesta is required';

    return new DetalleCalificacion(
      id,
      Calificacion.fromObject(calificacion),
      CriterioEvaluacion.fromObject(criterioEvaluacion),
      flashcardId,
      puntaje,
      comentario ?? '',
      tiempoRespuesta
    );
  }
}
