
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Grabacion } from "./Grabacion";
import { DetalleCalificacion } from "./DetalleCalificacion";
import { Evaluador } from "./Evaluador";

@Entity()
export class Calificacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Grabacion, (grabacion) => grabacion.calificaciones, { onDelete: "CASCADE" })
  grabacion!: Grabacion;

  @ManyToOne(() => Evaluador, (evaluador) => evaluador.calificaciones, { onDelete: "SET NULL", nullable: true })
  evaluador!: Evaluador;

  @Column("float")
  notaFinal!: number;

  @OneToMany(() => DetalleCalificacion, (detalle) => detalle.calificacion, { cascade: true })
  detalles!: DetalleCalificacion[];
}
