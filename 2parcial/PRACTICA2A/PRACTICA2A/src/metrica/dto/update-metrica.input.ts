import { CreateMetricaInput } from './create-metrica.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class UpdateMetricaInput extends PartialType(CreateMetricaInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
