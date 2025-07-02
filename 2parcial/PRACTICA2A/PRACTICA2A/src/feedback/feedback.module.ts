import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackService } from './feedback.service';
import { FeedbackResolver } from './feedback.resolver';
import { Feedback } from './entities/feedback.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback])],
  providers: [FeedbackResolver, FeedbackService],
  exports: [TypeOrmModule],
})
export class FeedbackModule {}
