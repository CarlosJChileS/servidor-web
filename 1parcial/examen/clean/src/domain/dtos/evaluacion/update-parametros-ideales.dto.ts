export class UpdateParametrosIdealesDto {
  private constructor(
    public readonly id: number,
    public readonly factorFacilidadInicial?: number,
    public readonly intervaloInicialDias?: number,
    public readonly repeticionesObjetivo?: number,
    public readonly otrosParametros?: string,
  ) {}

  get values() {
    const obj: { [key: string]: any } = {};
    if (this.factorFacilidadInicial !== undefined) obj.factorFacilidadInicial = this.factorFacilidadInicial;
    if (this.intervaloInicialDias !== undefined) obj.intervaloInicialDias = this.intervaloInicialDias;
    if (this.repeticionesObjetivo !== undefined) obj.repeticionesObjetivo = this.repeticionesObjetivo;
    if (this.otrosParametros !== undefined) obj.otrosParametros = this.otrosParametros;
    return obj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateParametrosIdealesDto?] {
    const {
      id,
      factorFacilidadInicial,
      intervaloInicialDias,
      repeticionesObjetivo,
      otrosParametros,
    } = props;
    if (id === undefined || isNaN(Number(id))) return ['id must be a valid number'];
    return [
      undefined,
      new UpdateParametrosIdealesDto(
        Number(id),
        factorFacilidadInicial !== undefined ? Number(factorFacilidadInicial) : undefined,
        intervaloInicialDias !== undefined ? Number(intervaloInicialDias) : undefined,
        repeticionesObjetivo !== undefined ? Number(repeticionesObjetivo) : undefined,
        otrosParametros,
      ),
    ];
  }
}
