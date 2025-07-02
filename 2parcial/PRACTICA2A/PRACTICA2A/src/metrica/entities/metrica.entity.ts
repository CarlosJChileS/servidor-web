import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
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
@Entity({ name: 'metricas' })
export class Metrica {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  nombre: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  descripcion?: string;

  @Field(() => Int)
  @Column('int')
  tipoMetricaId: number;

  @OneToMany(() => Feedback, (feedback) => feedback.metrica)
  feedbacks: Feedback[];

  @Field(() => Date)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
