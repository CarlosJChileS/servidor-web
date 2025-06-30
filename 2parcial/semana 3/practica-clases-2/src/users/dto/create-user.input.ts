import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @Field(() => String, { description: 'User name' })
  nombre: string;
  @IsString()
  @Field(() => String, { description: 'User email' })
  correo: string;

}
