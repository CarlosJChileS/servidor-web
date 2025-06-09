export class Flashcard {
  constructor(
    public id: number,
    public pregunta: string,
    public respuesta: string,
    public categorias: string[]
  ) {}

  static fromObject(obj: Record<string, any>): Flashcard {
    const { id, pregunta, respuesta, categorias } = obj;
    if (id === undefined) throw 'id is required';
    if (!pregunta) throw 'pregunta is required';
    if (!respuesta) throw 'respuesta is required';
    return new Flashcard(id, pregunta, respuesta, categorias ?? []);
  }
}
