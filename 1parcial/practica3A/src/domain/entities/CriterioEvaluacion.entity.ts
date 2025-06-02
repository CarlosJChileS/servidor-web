export class CriterioEvaluacion {
  constructor(
    public id: number,
    public nombre: string,
    public descripcion: string,
    public peso: number
  ) {}

  public static fromObject(object: { [key: string]: any }): CriterioEvaluacion {
    const { id, nombre, descripcion, peso } = object;
    if (!id) throw 'id is required';
    if (!nombre) throw 'nombre is required';

    return new CriterioEvaluacion(id, nombre, descripcion, peso);
  }
}
