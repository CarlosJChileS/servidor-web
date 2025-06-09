export class CreateParametrosIdealesDto {
  private constructor(
    public readonly factorFacilidadInicial: number,
    public readonly intervaloInicialDias: number,
    public readonly repeticionesObjetivo: number,
    public readonly otrosParametros: string,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateParametrosIdealesDto?] {
    const {
      factorFacilidadInicial,
      intervaloInicialDias,
      repeticionesObjetivo,
      otrosParametros,
    } = props;
    if (factorFacilidadInicial === undefined) return ['factorFacilidadInicial is required'];
    if (intervaloInicialDias === undefined) return ['intervaloInicialDias is required'];
    if (repeticionesObjetivo === undefined) return ['repeticionesObjetivo is required'];

    return [
      undefined,
      new CreateParametrosIdealesDto(
        Number(factorFacilidadInicial),
        Number(intervaloInicialDias),
        Number(repeticionesObjetivo),
        otrosParametros ?? '',
      ),
    ];
  }
}
