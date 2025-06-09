export class CreateDetalleCalificacionDto {
  private constructor(
    public readonly calificacionId: number,
    public readonly criterioEvaluacionId: number,
    public readonly flashcardId: number,
    public readonly puntaje: number,
    public readonly comentario: string,
    public readonly tiempoRespuesta: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateDetalleCalificacionDto?] {
    const {
      calificacionId,
      criterioEvaluacionId,
      flashcardId,
      puntaje,
      comentario,
      tiempoRespuesta,
    } = props;

    if (calificacionId === undefined) return ['calificacionId is required'];
    if (criterioEvaluacionId === undefined) return ['criterioEvaluacionId is required'];
    if (flashcardId === undefined) return ['flashcardId is required'];
    if (puntaje === undefined) return ['puntaje is required'];
    if (tiempoRespuesta === undefined) return ['tiempoRespuesta is required'];

    return [
      undefined,
      new CreateDetalleCalificacionDto(
        Number(calificacionId),
        Number(criterioEvaluacionId),
        Number(flashcardId),
        Number(puntaje),
        comentario ?? '',
        Number(tiempoRespuesta),
      ),
    ];
  }
}
