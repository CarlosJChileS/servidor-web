import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateGrabacionInput {
  @Field()
  @IsString()
  archivoAudio: string;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  fechaGrabacion?: Date;
}
