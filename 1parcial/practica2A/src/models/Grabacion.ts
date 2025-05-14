import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Calificacion } from "./Calificacion";

@Entity()
export class Grabacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!: string;

  @Column("text")
  descripcion!: string;

  @Column()
  fecha!: Date;

  @Column()
  url!: string;

  @OneToMany(() => Calificacion, (calificacion) => calificacion.grabacion)
  calificaciones!: Calificacion[];
}

