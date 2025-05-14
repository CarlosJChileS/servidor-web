import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DetalleCalificacion } from "./DetalleCalificacion";

@Entity()
export class CriterioEvaluacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column("text")
  descripcion!: string;

  @OneToMany(() => DetalleCalificacion, (detalle) => detalle.criterio)
  detalles!: DetalleCalificacion[];
}