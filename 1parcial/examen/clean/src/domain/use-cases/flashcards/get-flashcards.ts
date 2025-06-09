import { Flashcard } from '../../entities/flashcards/flashcard.entity';
import { FlashcardRepository } from '../../repositories/flashcards/flashcard.repository';

export interface GetFlashcardsUseCase {
  execute(): Promise<Flashcard[]>;
}

export class GetFlashcards implements GetFlashcardsUseCase {
  constructor(private readonly repository: FlashcardRepository) {}
  execute(): Promise<Flashcard[]> {
    return this.repository.getAll();
  }
}
