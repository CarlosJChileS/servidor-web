// models/Calificacion.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Grabacion } from "./Grabacion";
import { Evaluador } from "./Evaluador";
import { DetalleCalificacion } from "./DetalleCalificacion"; // Importación añadida

@Entity()
export class Calificacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Grabacion, grabacion => grabacion.calificaciones)
  grabacion!: Grabacion;

  @ManyToOne(() => Evaluador, evaluador => evaluador.calificaciones)
  evaluador!: Evaluador;

  @Column("float")
  notaFinal!: number;

  // Relación OneToMany añadida
  @OneToMany(() => DetalleCalificacion, detalle => detalle.calificacion)
  detalles!: DetalleCalificacion[];
}