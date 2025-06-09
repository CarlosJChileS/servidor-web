import fs from 'fs';
import path from 'path';
import { Flashcard, FlashcardDatasource } from '../../domain';

export class FlashcardJsonDatasource implements FlashcardDatasource {
  private flashcards: Flashcard[] = [];
  private nextId = 1;

  constructor(private readonly filePath: string) {
    this.loadData();
  }

  private loadData() {
    try {
      const abs = path.isAbsolute(this.filePath) ? this.filePath : path.join(process.cwd(), this.filePath);
      if (fs.existsSync(abs)) {
        const data = JSON.parse(fs.readFileSync(abs, 'utf8'));
        if (Array.isArray(data)) {
          this.flashcards = data.map(obj => Flashcard.fromObject(obj));
          const ids = this.flashcards.map(f => f.id);
          if (ids.length) this.nextId = Math.max(...ids) + 1;
        }
      }
    } catch (error) {
      console.error('Failed to load flashcards JSON:', error);
      this.flashcards = [];
    }
  }

  private saveData() {
    try {
      const abs = path.isAbsolute(this.filePath) ? this.filePath : path.join(process.cwd(), this.filePath);
      const data = this.flashcards.map(f => ({
        id: f.id,
        pregunta: f.pregunta,
        respuesta: f.respuesta,
        categorias: f.categorias
      }));
      fs.writeFileSync(abs, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      console.error('Failed to save flashcards JSON:', error);
    }
  }

  async create(flashcard: Flashcard): Promise<Flashcard> {
    const newFlashcard = new Flashcard(this.nextId++, flashcard.pregunta, flashcard.respuesta, flashcard.categorias);
    this.flashcards.push(newFlashcard);
    this.saveData();
    return newFlashcard;
  }

  async getAll(): Promise<Flashcard[]> {
    return [...this.flashcards];
  }

  async findById(id: number): Promise<Flashcard> {
    const flashcard = this.flashcards.find(f => f.id === id);
    if (!flashcard) throw `Flashcard with id ${id} not found`;
    return flashcard;
  }

  async update(flashcard: Flashcard): Promise<Flashcard> {
    const index = this.flashcards.findIndex(f => f.id === flashcard.id);
    if (index === -1) throw `Flashcard with id ${flashcard.id} not found`;
    this.flashcards[index] = flashcard;
    this.saveData();
    return flashcard;
  }

  async deleteById(id: number): Promise<Flashcard> {
    const index = this.flashcards.findIndex(f => f.id === id);
    if (index === -1) throw `Flashcard with id ${id} not found`;
    const [deleted] = this.flashcards.splice(index, 1);
    this.saveData();
    return deleted;
  }
}
