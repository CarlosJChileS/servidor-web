import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity'; // ← Asegúrate de importar bien la entidad
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // ← Esto es lo que faltaba
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
