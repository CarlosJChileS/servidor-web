export class FlashcardInteraction {
  constructor(
    public id: number,
    public flashcardId: number,
    public userId: number,
    public correcta: boolean,
    public tiempoRespuesta: number,
    public fecha: Date
  ) {}

  static fromObject(obj: Record<string, any>): FlashcardInteraction {
    const { id, flashcardId, userId, correcta, tiempoRespuesta, fecha } = obj;
    if (id === undefined) throw 'id is required';
    if (flashcardId === undefined) throw 'flashcardId is required';
    if (userId === undefined) throw 'userId is required';
    if (correcta === undefined) throw 'correcta is required';
    if (tiempoRespuesta === undefined) throw 'tiempoRespuesta is required';
    if (!fecha) throw 'fecha is required';
    const date = new Date(fecha);
    if (isNaN(date.getTime())) throw 'fecha is not valid';
    return new FlashcardInteraction(
      id,
      flashcardId,
      userId,
      Boolean(correcta),
      tiempoRespuesta,
      date
    );
  }
}
