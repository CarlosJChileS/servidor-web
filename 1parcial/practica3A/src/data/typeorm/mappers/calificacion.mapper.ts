import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Calificacion } from '../../../domain/entities/Calificacion.entity';

@Entity('calificaciones')
export class CalificacionTypeOrm {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    grabacionId!: number;

    @Column({ nullable: true })
    usuarioId!: number | null;

    @Column('decimal')
    puntajeGlobal!: number;

    @Column()
    observacionGlobal!: string;

    @Column()
    tipoCalificacion!: string;

    @Column()
    fecha!: Date;

    // Métodos de mapeo

    toDomain(): Calificacion {
        return new Calificacion(
            this.id,
            this.grabacionId,
            this.usuarioId,
            Number(this.puntajeGlobal),
            this.observacionGlobal,
            this.tipoCalificacion,
            this.fecha
        );
    }

    static fromDomain(calificacion: Calificacion): CalificacionTypeOrm {
        const entity = new CalificacionTypeOrm();
        entity.id = calificacion.id;
        entity.grabacionId = calificacion.grabacionId;
        entity.usuarioId = calificacion.usuarioId;
        entity.puntajeGlobal = calificacion.puntajeGlobal;
        entity.observacionGlobal = calificacion.observacionGlobal;
        entity.tipoCalificacion = calificacion.tipoCalificacion;
        entity.fecha = calificacion.fecha;
        return entity;
    }
}
