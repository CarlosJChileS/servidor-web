import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { FeedbackService } from './feedback.service';
import { Feedback } from './entities/feedback.entity';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';

@Resolver(() => Feedback)
export class FeedbackResolver {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Mutation(() => Feedback)
  createFeedback(
    @Args('createFeedbackInput') createFeedbackInput: CreateFeedbackInput,
  ) {
    return this.feedbackService.create(createFeedbackInput);
  }

  @Query(() => [Feedback], { name: 'feedbacks' })
  findAll() {
    return this.feedbackService.findAll();
  }

  @Query(() => Feedback, { name: 'feedback' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.feedbackService.findOne(id);
  }

  @Mutation(() => Feedback)
  updateFeedback(
    @Args('updateFeedbackInput') updateFeedbackInput: UpdateFeedbackInput,
  ) {
    return this.feedbackService.update(
      updateFeedbackInput.id,
      updateFeedbackInput,
    );
  }

  @Mutation(() => Feedback)
  removeFeedback(@Args('id', { type: () => ID }) id: string) {
    return this.feedbackService.remove(id);
  }
}
