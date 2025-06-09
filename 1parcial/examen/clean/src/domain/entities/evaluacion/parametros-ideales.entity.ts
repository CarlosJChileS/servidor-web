export class ParametrosIdeales {
  constructor(
    public id: number,
    public factorFacilidadInicial: number,
    public intervaloInicialDias: number,
    public repeticionesObjetivo: number,
    public otrosParametros: string,
  ) {}

  static fromObject(obj: Record<string, any>): ParametrosIdeales {
    const {
      id,
      factorFacilidadInicial,
      intervaloInicialDias,
      repeticionesObjetivo,
      otrosParametros,
    } = obj;
    if (id === undefined) throw 'id is required';
    if (factorFacilidadInicial === undefined) throw 'factorFacilidadInicial is required';
    if (intervaloInicialDias === undefined) throw 'intervaloInicialDias is required';
    if (repeticionesObjetivo === undefined) throw 'repeticionesObjetivo is required';
    const otros = otrosParametros ?? '';
    return new ParametrosIdeales(
      id,
      factorFacilidadInicial,
      intervaloInicialDias,
      repeticionesObjetivo,
      otros
    );
  }
}
