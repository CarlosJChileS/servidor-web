export class CreateCriterioEvaluacionDto {
  private constructor(
    public readonly nombre: string,
    public readonly descripcion: string,
    public readonly dificultad: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateCriterioEvaluacionDto?] {
    const { nombre, descripcion, dificultad } = props;
    if (!nombre) return ['nombre is required'];
    if (dificultad === undefined) return ['dificultad is required'];
    return [undefined, new CreateCriterioEvaluacionDto(nombre, descripcion ?? '', Number(dificultad))];
  }
}
