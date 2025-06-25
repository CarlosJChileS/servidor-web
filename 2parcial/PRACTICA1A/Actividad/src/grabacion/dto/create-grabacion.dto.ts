import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateGrabacionDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  titulo: string;

  @IsString()
  url: string;

  @IsNumber()
  duracion: number;

  @IsString()
  fecha: string;
}
