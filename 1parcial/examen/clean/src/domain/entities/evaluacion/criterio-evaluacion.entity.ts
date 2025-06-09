export class CriterioEvaluacion {
  constructor(
    public id: number,
    public nombre: string,
    public descripcion: string,
    public dificultad: number,
  ) {}

  static fromObject(obj: Record<string, any>): CriterioEvaluacion {
    const { id, nombre, descripcion, dificultad } = obj;
    if (id === undefined) throw 'id is required';
    if (!nombre) throw 'nombre is required';
    if (dificultad === undefined) throw 'dificultad is required';
    const desc = descripcion ?? '';
    return new CriterioEvaluacion(id, nombre, desc, dificultad);
  }
}
