import { ParametrosIdeales } from './parametros-ideales.entity';

export class Calificacion {
  constructor(
    public id: number,
    public usuarioId: number,
    public puntajeGlobal: number,
    public observacionGlobal: string,
    public modoEstudio: string,
    public fecha: Date,
    public parametrosIdeales?: ParametrosIdeales,
  ) {}

  get hasParametros() {
    return !!this.parametrosIdeales;
  }

  static fromObject(obj: Record<string, any>): Calificacion {
    const {
      id,
      usuarioId,
      puntajeGlobal,
      observacionGlobal,
      modoEstudio,
      fecha,
      parametrosIdeales,
    } = obj;

    if (id === undefined) throw 'id is required';
    if (usuarioId === undefined) throw 'usuarioId is required';
    if (puntajeGlobal === undefined) throw 'puntajeGlobal is required';
    if (!modoEstudio) throw 'modoEstudio is required';
    if (!fecha) throw 'fecha is required';

    const date = new Date(fecha);
    if (isNaN(date.getTime())) throw 'fecha is not valid';

    const param = parametrosIdeales
      ? ParametrosIdeales.fromObject(parametrosIdeales)
      : undefined;

    return new Calificacion(
      id,
      usuarioId,
      puntajeGlobal,
      observacionGlobal ?? '',
      modoEstudio,
      date,
      param
    );
  }
}
