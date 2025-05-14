// models/DetalleCalificacion.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Calificacion } from "./Calificacion";
import { CriterioEvaluacion } from "./CriterioEvaluacion";

@Entity()
export class DetalleCalificacion { // Nombre corregido
  @PrimaryGeneratedColumn()
  id!: number; // Nombre estándar

  @ManyToOne(() => Calificacion, calificacion => calificacion.detalles)
  calificacion!: Calificacion; // Nombre corregido

  @ManyToOne(() => CriterioEvaluacion, criterio => criterio.detalles)
  criterio!: CriterioEvaluacion; // Nombre corregido

  @Column("float")
  puntuacion!: number; // Nombre estándar
}