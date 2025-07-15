import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Grabacion } from '../../grabacion/entities/grabacion.entity';
import { Metrica } from '../../metrica/entities/metrica.entity';

@Entity('feedbacks')
export class Feedback {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  score: number;

  @Column({ nullable: true })
  comentario?: string;

  @Column('boolean')
  esManual: boolean;

  @ManyToOne(() => Grabacion, (grabacion) => grabacion.feedbacks, {
    eager: true,
  })
  grabacion: Grabacion;

  @ManyToOne(() => Metrica, (metrica) => metrica.feedbacks, { eager: true })
  metrica: Metrica;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
