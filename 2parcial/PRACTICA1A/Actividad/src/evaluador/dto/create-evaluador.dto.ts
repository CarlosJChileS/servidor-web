import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEvaluadorDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  nombre: string;

  @IsString()
  @IsOptional()
  correo?: string;

  @IsString()
  area: string;
}
