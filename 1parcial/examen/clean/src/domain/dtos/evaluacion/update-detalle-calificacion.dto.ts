export class UpdateDetalleCalificacionDto {
  private constructor(
    public readonly id: number,
    public readonly calificacionId?: number,
    public readonly criterioEvaluacionId?: number,
    public readonly flashcardId?: number,
    public readonly puntaje?: number,
    public readonly comentario?: string,
    public readonly tiempoRespuesta?: number,
  ) {}

  get values() {
    const obj: { [key: string]: any } = {};
    if (this.calificacionId !== undefined) obj.calificacionId = this.calificacionId;
    if (this.criterioEvaluacionId !== undefined) obj.criterioEvaluacionId = this.criterioEvaluacionId;
    if (this.flashcardId !== undefined) obj.flashcardId = this.flashcardId;
    if (this.puntaje !== undefined) obj.puntaje = this.puntaje;
    if (this.comentario !== undefined) obj.comentario = this.comentario;
    if (this.tiempoRespuesta !== undefined) obj.tiempoRespuesta = this.tiempoRespuesta;
    return obj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateDetalleCalificacionDto?] {
    const {
      id,
      calificacionId,
      criterioEvaluacionId,
      flashcardId,
      puntaje,
      comentario,
      tiempoRespuesta,
    } = props;

    if (id === undefined || isNaN(Number(id))) return ['id must be a valid number'];

    return [
      undefined,
      new UpdateDetalleCalificacionDto(
        Number(id),
        calificacionId !== undefined ? Number(calificacionId) : undefined,
        criterioEvaluacionId !== undefined ? Number(criterioEvaluacionId) : undefined,
        flashcardId !== undefined ? Number(flashcardId) : undefined,
        puntaje !== undefined ? Number(puntaje) : undefined,
        comentario,
        tiempoRespuesta !== undefined ? Number(tiempoRespuesta) : undefined,
      ),
    ];
  }
}
