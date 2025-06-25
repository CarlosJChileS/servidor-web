import { PartialType } from '@nestjs/mapped-types';
import { CreateEvaluadorDto } from './create-evaluador.dto';

export class UpdateEvaluadorDto extends PartialType(CreateEvaluadorDto) {}
