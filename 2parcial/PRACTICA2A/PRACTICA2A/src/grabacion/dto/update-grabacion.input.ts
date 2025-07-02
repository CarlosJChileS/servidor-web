import { CreateGrabacionInput } from './create-grabacion.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class UpdateGrabacionInput extends PartialType(CreateGrabacionInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
