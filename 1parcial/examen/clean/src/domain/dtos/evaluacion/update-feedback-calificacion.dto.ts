export class UpdateFeedbackCalificacionDto {
  private constructor(
    public readonly id: number,
    public readonly calificacionId?: number,
    public readonly observacion?: string,
    public readonly fecha?: Date,
    public readonly autor?: string,
  ) {}

  get values() {
    const obj: { [key: string]: any } = {};
    if (this.calificacionId !== undefined) obj.calificacionId = this.calificacionId;
    if (this.observacion !== undefined) obj.observacion = this.observacion;
    if (this.fecha) obj.fecha = this.fecha;
    if (this.autor !== undefined) obj.autor = this.autor;
    return obj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateFeedbackCalificacionDto?] {
    const { id, calificacionId, observacion, fecha, autor } = props;
    if (id === undefined || isNaN(Number(id))) return ['id must be a valid number'];

    let parsedDate: Date | undefined = undefined;
    if (fecha) {
      parsedDate = new Date(fecha);
      if (parsedDate.toString() === 'Invalid Date') return ['fecha must be a valid date'];
    }

    return [
      undefined,
      new UpdateFeedbackCalificacionDto(
        Number(id),
        calificacionId !== undefined ? Number(calificacionId) : undefined,
        observacion,
        parsedDate,
        autor,
      ),
    ];
  }
}
