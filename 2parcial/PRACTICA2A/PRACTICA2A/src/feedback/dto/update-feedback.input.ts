import { CreateFeedbackInput } from './create-feedback.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class UpdateFeedbackInput extends PartialType(CreateFeedbackInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
