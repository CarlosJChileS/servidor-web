import { UpdateCalificacionDto } from '../../dtos/calificacion/update-calificacion.dto';
import { Calificacion } from '../../entities/Calificacion.entity';
import { CalificacionRepository } from '../../repositories/calificacion.repository';

export interface UpdateCalificacionUseCase {
  execute(props: { [key: string]: any }): Promise<Calificacion>;
}

export class UpdateCalificacion implements UpdateCalificacionUseCase {
  constructor(private readonly repository: CalificacionRepository) {}

  async execute(props: { [key: string]: any }): Promise<Calificacion> {
    const [error, dto] = UpdateCalificacionDto.create(props);
    if (error || !dto) throw new Error(error);

    const existing = await this.repository.findById(dto.id);
    if (!existing) throw new Error('Calificacion not found');

    const updated = new Calificacion(
      dto.id,
      dto.grabacionId ?? existing.grabacionId,
      dto.usuarioId ?? existing.usuarioId,
      dto.puntajeGlobal ?? existing.puntajeGlobal,
      dto.observacionGlobal ?? existing.observacionGlobal,
      dto.tipoCalificacion ?? existing.tipoCalificacion,
      dto.fecha ?? existing.fecha
    );

    return this.repository.update(updated);
  }
}
