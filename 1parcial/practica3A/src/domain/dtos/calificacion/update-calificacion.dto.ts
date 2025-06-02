export class UpdateCalificacionDto {
  private constructor(
    public readonly id: number,
    public readonly grabacionId?: number,
    public readonly usuarioId?: number | null,
    public readonly puntajeGlobal?: number,
    public readonly observacionGlobal?: string,
    public readonly tipoCalificacion?: string,
    public readonly fecha?: Date,
    public readonly parametrosIdealesId?: number,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};
    if (this.grabacionId !== undefined) returnObj.grabacionId = this.grabacionId;
    if (this.usuarioId !== undefined) returnObj.usuarioId = this.usuarioId;
    if (this.puntajeGlobal !== undefined) returnObj.puntajeGlobal = this.puntajeGlobal;
    if (this.observacionGlobal !== undefined) returnObj.observacionGlobal = this.observacionGlobal;
    if (this.tipoCalificacion !== undefined) returnObj.tipoCalificacion = this.tipoCalificacion;
    if (this.fecha !== undefined) returnObj.fecha = this.fecha;
    if (this.parametrosIdealesId !== undefined) returnObj.parametrosIdealesId = this.parametrosIdealesId;
    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateCalificacionDto?] {
    const {
      id,
      grabacionId,
      usuarioId,
      puntajeGlobal,
      observacionGlobal,
      tipoCalificacion,
      fecha,
      parametrosIdealesId,
    } = props;

    if (!id || isNaN(Number(id))) return ['id must be a valid number'];

    let fechaParsed = undefined;
    if (fecha) {
      fechaParsed = new Date(fecha);
      if (fechaParsed.toString() === 'Invalid Date') {
        return ['fecha must be a valid date'];
      }
    }

    return [
      undefined,
      new UpdateCalificacionDto(
        Number(id),
        grabacionId !== undefined ? Number(grabacionId) : undefined,
        usuarioId !== undefined ? (usuarioId !== null ? Number(usuarioId) : null) : undefined,
        puntajeGlobal !== undefined ? Number(puntajeGlobal) : undefined,
        observacionGlobal,
        tipoCalificacion,
        fechaParsed,
        parametrosIdealesId !== undefined ? Number(parametrosIdealesId) : undefined
      ),
    ];
  }
}
