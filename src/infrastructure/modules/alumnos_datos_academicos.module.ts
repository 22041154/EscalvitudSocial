import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoDatosAcademicosEntity } from '../bd/entities/alumnos_datos_academicos.entity';
import { AlumnoDatosAcademicosRepository } from '../bd/repositories/alumnos_datos_academicos.repositiry';

@Module({
  imports: [
    TypeOrmModule.forFeature([AlumnoDatosAcademicosEntity])
  ],

  providers: [
    {
      provide: 'IAlumnoDatosAcademicosRepository',
      useClass: AlumnoDatosAcademicosRepository,
    },
  ],

  exports: [
    'IAlumnoDatosAcademicosRepository',
  ],

})
export class AlumnoDatosAcademicosModule {}