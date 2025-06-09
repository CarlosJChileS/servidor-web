export class CreateFlashcardDto {
  private constructor(
    public readonly pregunta: string,
    public readonly respuesta: string,
    public readonly categorias: string[] = []
  ) {}

  static create(obj: Record<string, any>): [string?, CreateFlashcardDto?] {
    const { pregunta, respuesta, categorias } = obj;
    if (!pregunta) return ['Pregunta is required'];
    if (!respuesta) return ['Respuesta is required'];
    const cats = Array.isArray(categorias) ? categorias : [];
    return [undefined, new CreateFlashcardDto(pregunta, respuesta, cats)];
  }
}
