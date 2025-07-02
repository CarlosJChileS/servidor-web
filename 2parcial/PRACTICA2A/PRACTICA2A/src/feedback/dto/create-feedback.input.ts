import { InputType, Field, Int, ID } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

@InputType()
export class CreateFeedbackInput {
  @Field(() => ID)
  @IsUUID()
  grabacionId: string;

  @Field(() => ID)
  @IsUUID()
  metricaId: string;

  @Field(() => Int)
  @IsInt()
  score: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  comentario?: string;

  @Field(() => Boolean)
  @IsBoolean()
  esManual: boolean;
}
