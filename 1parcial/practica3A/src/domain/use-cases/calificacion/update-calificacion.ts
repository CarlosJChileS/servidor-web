// src/domain/use-cases/calificacion/update-calificacion.ts
import { UpdateCalificacionDto } from '../../dtos/calificacion/update-calificacion.dto';
import { Calificacion } from '../../entities/Calificacion.entity';
import { CalificacionRepository } from '../../repositories/calificacion.repository';

export class UpdateCalificacion {
  constructor(private readonly repository: CalificacionRepository) {}

  async execute(dto: UpdateCalificacionDto): Promise<Calificacion> {
    // Aquí puedes buscar el objeto existente para combinar cambios
    const existing = await this.repository.findById(dto.id);
    if (!existing) throw new Error('Calificación no encontrada');

    // Crea una nueva entidad combinando lo existente + los campos nuevos
    const updated = new Calificacion(
      dto.id,
      dto.grabacionId ?? existing.grabacionId,
      dto.usuarioId ?? existing.usuarioId,
      dto.puntajeGlobal ?? existing.puntajeGlobal,
      dto.observacionGlobal ?? existing.observacionGlobal,
      dto.tipoCalificacion ?? existing.tipoCalificacion,
      dto.fecha ?? existing.fecha
      // Agrega otros campos si los tienes
    );

    return this.repository.update(updated);
  }
}
