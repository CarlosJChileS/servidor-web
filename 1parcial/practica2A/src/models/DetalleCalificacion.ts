import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Calificacion } from "./Calificacion";
import { CriterioEvaluacion } from "./CriterioEvaluacion";

@Entity()
export class DetalleCalificacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Calificacion, (calificacion) => calificacion.detalles, { onDelete: "CASCADE" })
  calificacion!: Calificacion;

  @ManyToOne(() => CriterioEvaluacion, (criterio) => criterio.detalles, { onDelete: "SET NULL", nullable: true })
  criterio!: CriterioEvaluacion;

  @Column("float")
  puntuacion!: number;
}
