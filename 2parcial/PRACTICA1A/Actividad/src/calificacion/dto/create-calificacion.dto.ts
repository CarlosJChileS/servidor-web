import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCalificacionDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsNumber()
  puntaje: number;

  @IsString()
  @IsOptional()
  observacion?: string;

  @IsString()
  fecha: string;
}
