import { Request, Response } from 'express';
import { GetFlashcards } from '../../domain/use-cases/flashcards/get-flashcards';

import { CreateFlashcard } from '../../domain/use-cases/flashcards/create-flashcard';
import { FlashcardRepository, CreateFlashcardDto } from '../../domain';



export class FlashcardsController {
  constructor(private readonly repository: FlashcardRepository) {}

  public getFlashcards = (req: Request, res: Response) => {
    new GetFlashcards(this.repository)
      .execute()
      .then(data => res.json(data))
      .catch(error => res.status(400).json({ error }));
  };

  public createFlashcard = (req: Request, res: Response) => {
    const [error, dto] = CreateFlashcardDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateFlashcard(this.repository)
      .execute(dto!)
      .then(flashcard => res.status(201).json(flashcard))
      .catch(err => res.status(400).json({ error: err }));
  };

}
