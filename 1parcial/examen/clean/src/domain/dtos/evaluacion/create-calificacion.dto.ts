export class CreateCalificacionDto {
  private constructor(
    public readonly usuarioId: number,
    public readonly puntajeGlobal: number,
    public readonly observacionGlobal: string,
    public readonly modoEstudio: string,
    public readonly fecha: Date,
    public readonly parametrosIdealesId?: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateCalificacionDto?] {
    const {
      usuarioId,
      puntajeGlobal,
      observacionGlobal,
      modoEstudio,
      fecha,
      parametrosIdealesId,
    } = props;

    if (usuarioId === undefined) return ['usuarioId is required'];
    if (puntajeGlobal === undefined) return ['puntajeGlobal is required'];
    if (!modoEstudio) return ['modoEstudio is required'];
    if (!fecha) return ['fecha is required'];

    const parsedDate = new Date(fecha);
    if (parsedDate.toString() === 'Invalid Date') return ['fecha must be a valid date'];

    return [
      undefined,
      new CreateCalificacionDto(
        Number(usuarioId),
        Number(puntajeGlobal),
        observacionGlobal ?? '',
        modoEstudio,
        parsedDate,
        parametrosIdealesId !== undefined ? Number(parametrosIdealesId) : undefined,
      ),
    ];
  }
}
