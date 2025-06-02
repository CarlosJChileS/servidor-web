export class CreateCalificacionDto {
  private constructor(
    public readonly grabacionId: number,
    public readonly usuarioId: number | null,
    public readonly puntajeGlobal: number,
    public readonly observacionGlobal: string,
    public readonly tipoCalificacion: string,
    public readonly fecha: Date,
    public readonly parametrosIdealesId?: number, // solo el id (relación)
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateCalificacionDto?] {
    const {
      grabacionId,
      usuarioId,
      puntajeGlobal,
      observacionGlobal,
      tipoCalificacion,
      fecha,
      parametrosIdealesId,
    } = props;

    if (!grabacionId || isNaN(Number(grabacionId)))
      return ['grabacionId is required and must be a number'];
    if (usuarioId !== null && usuarioId !== undefined && isNaN(Number(usuarioId)))
      return ['usuarioId must be a number or null'];
    if (puntajeGlobal === undefined || isNaN(Number(puntajeGlobal)))
      return ['puntajeGlobal is required and must be a number'];
    if (!tipoCalificacion) return ['tipoCalificacion is required'];
    if (!fecha) return ['fecha is required'];

    let fechaParsed = new Date(fecha);
    if (fechaParsed.toString() === 'Invalid Date') {
      return ['fecha must be a valid date'];
    }

    return [
      undefined,
      new CreateCalificacionDto(
        Number(grabacionId),
        usuarioId !== undefined ? Number(usuarioId) : null,
        Number(puntajeGlobal),
        observacionGlobal,
        tipoCalificacion,
        fechaParsed,
        parametrosIdealesId ? Number(parametrosIdealesId) : undefined
      ),
    ];
  }
}
