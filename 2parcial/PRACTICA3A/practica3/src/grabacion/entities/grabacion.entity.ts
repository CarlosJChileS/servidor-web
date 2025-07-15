import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Feedback } from '../../feedback/entities/feedback.entity';

@Entity('grabaciones')
export class Grabacion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  archivoAudio: string;

  @Column({ type: 'datetime', nullable: true })
  fechaGrabacion?: Date;

  @OneToMany(() => Feedback, (feedback) => feedback.grabacion)
  feedbacks: Feedback[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
