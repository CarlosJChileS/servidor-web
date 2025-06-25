import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('evaluadores')
export class Evaluador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  correo: string;

  @Column()
  area: string;
}
