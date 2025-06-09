import { Flashcard, FlashcardDatasource, FlashcardRepository } from '../../domain';

export class FlashcardRepositoryImpl implements FlashcardRepository {
  constructor(private readonly datasource: FlashcardDatasource) {}

  create(flashcard: Flashcard): Promise<Flashcard> {
    return this.datasource.create(flashcard);
  }
  getAll(): Promise<Flashcard[]> {
    return this.datasource.getAll();
  }
  findById(id: number): Promise<Flashcard> {
    return this.datasource.findById(id);
  }
  update(flashcard: Flashcard): Promise<Flashcard> {
    return this.datasource.update(flashcard);
  }
  deleteById(id: number): Promise<Flashcard> {
    return this.datasource.deleteById(id);
  }
}
