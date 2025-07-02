import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Feedback } from '../../feedback/entities/feedback.entity';

@ObjectType()
@Entity({ name: 'grabaciones' })
export class Grabacion {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  archivoAudio: string;

  @Field(() => Date, { nullable: true })
  @Column({ type: 'datetime', nullable: true })
  fechaGrabacion?: Date;

  @OneToMany(() => Feedback, (feedback) => feedback.grabacion)
  feedbacks: Feedback[];

  @Field(() => Date)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
