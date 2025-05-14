import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Calificacion } from "./Calificacion";

@Entity()
export class Grabacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 200 })
  titulo!: string;

  @Column("text")
  descripcion!: string;

  @Column("datetime")
  fecha!: Date;

  @Column({ length: 500 })
  url!: string;

  @OneToMany(() => Calificacion, (calificacion) => calificacion.grabacion, {
    onDelete: "CASCADE"
  })
  calificaciones!: Calificacion[];
}