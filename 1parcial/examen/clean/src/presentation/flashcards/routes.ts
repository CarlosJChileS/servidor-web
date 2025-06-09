import { Router } from 'express';
import path from 'path';
import { FlashcardJsonDatasource } from '../../infrastructure/datasource/flashcard.json.datasource';
import { FlashcardRepositoryImpl } from '../../infrastructure/repositories/flashcard.repository.impl';
import { FlashcardsController } from './controller';

export class FlashcardsRoutes {
  static get routes(): Router {
    const router = Router();
    const filePath = path.join(__dirname, '../../data/flashcards.json');
    const datasource = new FlashcardJsonDatasource(filePath);
    const repository = new FlashcardRepositoryImpl(datasource);
    const controller = new FlashcardsController(repository);

    router.get('/', controller.getFlashcards);

    router.post('/', controller.createFlashcard);


    return router;
  }
}
