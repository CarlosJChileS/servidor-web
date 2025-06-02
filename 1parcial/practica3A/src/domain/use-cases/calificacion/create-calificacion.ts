import { CreateCalificacionDto } from '../../dtos/calificacion/create-calificacion.dto';
import { Calificacion } from '../../entities/Calificacion.entity';
import { CalificacionRepository } from '../../repositories/calificacion.repository';

export interface CreateCalificacionUseCase {
  execute(props: { [key: string]: any }): Promise<Calificacion>;
}

export class CreateCalificacion implements CreateCalificacionUseCase {
  constructor(private readonly repository: CalificacionRepository) {}

  async execute(props: { [key: string]: any }): Promise<Calificacion> {
    const [error, dto] = CreateCalificacionDto.create(props);
    if (error || !dto) throw new Error(error);

    const calificacion = new Calificacion(
      0, // El id lo asigna la base de datos
      dto.grabacionId,
      dto.usuarioId,
      dto.puntajeGlobal,
      dto.observacionGlobal,
      dto.tipoCalificacion,
      dto.fecha
    );

    return this.repository.create(calificacion);
  }
}
