import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  
  @Field( () => ID, { description: 'User ID' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field( () => String, { description: 'User name' })
  @Column()
  nombre: string;
  
  @Field( () => String, { description: 'User email' })
  @Column()
  correo: string;

}
