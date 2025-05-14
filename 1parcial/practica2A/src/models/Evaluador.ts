import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Calificacion } from "./Calificacion";

@Entity()
export class Evaluador {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ length: 255, unique: true })
  correo!: string;

  @Column({ length: 100 })
  especialidad!: string;

  @OneToMany(() => Calificacion, (calificacion) => calificacion.evaluador, {
    onDelete: "SET NULL"
  })
  calificaciones!: Calificacion[];
}