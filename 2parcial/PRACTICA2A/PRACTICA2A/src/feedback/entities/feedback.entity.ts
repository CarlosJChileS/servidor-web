import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Grabacion } from '../../grabacion/entities/grabacion.entity';
import { Metrica } from '../../metrica/entities/metrica.entity';

@ObjectType()
@Entity({ name: 'feedbacks' })
export class Feedback {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Int)
  @Column('int')
  score: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  comentario?: string;

  @Field(() => Boolean)
  @Column('boolean')
  esManual: boolean;

  @Field(() => Grabacion)
  @ManyToOne(() => Grabacion, (grabacion) => grabacion.feedbacks, {
    eager: true,
  })
  grabacion: Grabacion;

  @Field(() => Metrica)
  @ManyToOne(() => Metrica, (metrica) => metrica.feedbacks, { eager: true })
  metrica: Metrica;

  @Field(() => Date)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
