import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccesoEntity } from '../bd/entities/acceso.entity';
import { AccesoRepository } from '../bd/repositories/acceso.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccesoEntity])
  ],

  providers: [

    // Aquí hacemos el binding entre la interfaz y la implementación
    {
      provide: 'IAccesoRepository',
      useClass: AccesoRepository,
    },

  ],

  exports: [

    // Exportamos el token, no la clase
    'IAccesoRepository',

  ],

})
export class AccesoModule {}
