import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Feedback } from '../../feedback/entities/feedback.entity';

@Entity('metricas')
export class Metrica {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion?: string;

  @Column('int')
  tipoMetricaId: number;

  @OneToMany(() => Feedback, (feedback) => feedback.metrica)
  feedbacks: Feedback[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
