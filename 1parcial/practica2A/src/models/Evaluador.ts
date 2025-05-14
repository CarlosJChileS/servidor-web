// models/Evaluador.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Calificacion } from "./Calificacion";

@Entity()
export class Evaluador {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "nombre", length: 100 }) // <-- Nombre correcto de la columna
  nombre!: string;

  @Column({ name: "correo", length: 255, unique: true })
  correo!: string;

  @Column({ name: "especialidad", length: 100, nullable: false }) // <-- Campo obligatorio
  especialidad!: string;

  @OneToMany(() => Calificacion, (calificacion) => calificacion.evaluador)
  calificaciones!: Calificacion[];
}