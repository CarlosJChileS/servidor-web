
export class Calificacion {
  constructor(
    public id: number,
    public grabacionId: number,
    public usuarioId: number | null,
    public puntajeGlobal: number,
    public observacionGlobal: string,
    public tipoCalificacion: string,
    public fecha: Date,
  ) {}

  public static fromObject(object: { [key: string]: any }): Calificacion {
    const {
      id,
      grabacionId,
      usuarioId,
      puntajeGlobal,
      observacionGlobal,
      tipoCalificacion,
      fecha,
      
    } = object;

    if (!id) throw 'id is required';
    if (!grabacionId) throw 'grabacionId is required';

    // Puedes hacer más validaciones aquí
    return new Calificacion(
      id,
      grabacionId,
      usuarioId ?? null,
      puntajeGlobal,
      observacionGlobal,
      tipoCalificacion,
      fecha ? new Date(fecha) : new Date(),
    
    );
  }
}
