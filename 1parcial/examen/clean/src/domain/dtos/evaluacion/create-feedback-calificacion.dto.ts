export class CreateFeedbackCalificacionDto {
  private constructor(
    public readonly calificacionId: number,
    public readonly observacion: string,
    public readonly fecha: Date,
    public readonly autor: string,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateFeedbackCalificacionDto?] {
    const { calificacionId, observacion, fecha, autor } = props;
    if (calificacionId === undefined) return ['calificacionId is required'];
    if (!fecha) return ['fecha is required'];

    const parsedDate = new Date(fecha);
    if (parsedDate.toString() === 'Invalid Date') return ['fecha must be a valid date'];

    return [
      undefined,
      new CreateFeedbackCalificacionDto(
        Number(calificacionId),
        observacion ?? '',
        parsedDate,
        autor ?? '',
      ),
    ];
  }
}
