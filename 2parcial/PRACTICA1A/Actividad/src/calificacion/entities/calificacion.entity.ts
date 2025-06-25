import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calificaciones')
export class Calificacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  puntaje: number;

  @Column({ nullable: true })
  observacion: string;

  @Column()
  fecha: string;
}
