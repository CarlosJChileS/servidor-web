import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Calificacion } from "./Calificacion";

@Entity()
export class Evaluador {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  correo!: string;

  @Column()
  especialidad!: string;

  @OneToMany(() => Calificacion, (calificacion) => calificacion.evaluador)
  calificaciones!: Calificacion[];
}
