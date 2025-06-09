export class UpdateCriterioEvaluacionDto {
  private constructor(
    public readonly id: number,
    public readonly nombre?: string,
    public readonly descripcion?: string,
    public readonly dificultad?: number,
  ) {}

  get values() {
    const obj: { [key: string]: any } = {};
    if (this.nombre !== undefined) obj.nombre = this.nombre;
    if (this.descripcion !== undefined) obj.descripcion = this.descripcion;
    if (this.dificultad !== undefined) obj.dificultad = this.dificultad;
    return obj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateCriterioEvaluacionDto?] {
    const { id, nombre, descripcion, dificultad } = props;
    if (id === undefined || isNaN(Number(id))) return ['id must be a valid number'];
    return [
      undefined,
      new UpdateCriterioEvaluacionDto(
        Number(id),
        nombre,
        descripcion,
        dificultad !== undefined ? Number(dificultad) : undefined,
      ),
    ];
  }
}
