import { Flashcard } from '../../entities/flashcards/flashcard.entity';

export abstract class FlashcardDatasource {
  abstract create(flashcard: Flashcard): Promise<Flashcard>;
  abstract getAll(): Promise<Flashcard[]>;
  abstract findById(id: number): Promise<Flashcard>;
  abstract update(flashcard: Flashcard): Promise<Flashcard>;
  abstract deleteById(id: number): Promise<Flashcard>;
}
