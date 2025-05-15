// models/Evaluador.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Calificacion } from "./Calificacion";

@Entity()
export class Evaluador {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "nombre", length: 100 }) 
  nombre!: string;

  @Column({ name: "correo", length: 255,  })
  correo!: string;

  @Column({ name: "especialidad", length: 100, })
  especialidad!: string;

  @OneToMany(() => Calificacion, (calificacion) => calificacion.evaluador)
  calificaciones!: Calificacion[];
}