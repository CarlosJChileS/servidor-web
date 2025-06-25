import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('grabaciones')
export class Grabacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  url: string;

  @Column('int')
  duracion: number;

  @Column()
  fecha: string;
}
