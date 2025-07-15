import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './entities/feedback.entity';
import { FeedbackService } from './feedback.service';
import { FeedbackGateway } from './feedback.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback])],
  providers: [FeedbackService, FeedbackGateway],
})
export class FeedbackModule {}
