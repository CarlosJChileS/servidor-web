import { FlashcardRepository } from '../../repositories/flashcards/flashcard.repository';
import { Flashcard } from '../../entities/flashcards/flashcard.entity';
import { CreateFlashcardDto } from '../../dtos/flashcards/create-flashcard.dto';

export interface CreateFlashcardUseCase {
  execute(dto: CreateFlashcardDto): Promise<Flashcard>;
}

export class CreateFlashcard implements CreateFlashcardUseCase {
  constructor(private readonly repository: FlashcardRepository) {}

  execute(dto: CreateFlashcardDto): Promise<Flashcard> {
    const flashcard = new Flashcard(0, dto.pregunta, dto.respuesta, dto.categorias);
    return this.repository.create(flashcard);
  }
}
