export class ParametrosIdeales {
  constructor(
    public id: number,
    public claridadIdeal: number,
    public velocidadIdeal: number,
    public pausasIdeales: number,
    public otrosParametros: string
  ) {}

  public static fromObject(object: { [key: string]: any }): ParametrosIdeales {
    const { id, claridadIdeal, velocidadIdeal, pausasIdeales, otrosParametros } = object;
    if (!id) throw 'id is required';

    return new ParametrosIdeales(
      id,
      claridadIdeal,
      velocidadIdeal,
      pausasIdeales,
      otrosParametros
    );
  }
}
