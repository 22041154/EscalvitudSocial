import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccesoEntity } from '../bd/entities/acceso.entity';
import { AccesoRepository } from '../bd/repositories/acceso.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccesoEntity])
  ],

  providers: [
    {
      provide: 'IAccesoRepository',
      useClass: AccesoRepository,
    },
  ],

  exports: [
    'IAccesoRepository',
  ],

})
export class AccesoModule {}
