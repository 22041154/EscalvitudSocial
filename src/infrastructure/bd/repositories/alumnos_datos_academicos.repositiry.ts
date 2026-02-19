import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Entity de infraestructura (tabla de la BD)
import { AlumnoDatosAcademicosEntity } from '../entities/alumnos_datos_academicos.entity';

// Entity de dominio (modelo del negocio)
import { AlumnoDatosAcademicos } from '../../../domain/entities/alumnos_datos_academicos.entity';

// Interfaz del repositorio (contrato del dominio)
import { IAlumnoDatosAcademicosRepository } from '../../../domain/interfaces/alumnos_datos_academicos.repository.interface';

@Injectable()
export class AlumnoDatosAcademicosRepository implements IAlumnoDatosAcademicosRepository {

  constructor(
    @InjectRepository(AlumnoDatosAcademicosEntity)
    private readonly alumnoRepository: Repository<AlumnoDatosAcademicosEntity>,
  ) {}

  async buscarPorNoControl(noControl: string): Promise<AlumnoDatosAcademicos | null> {

    const entity = await this.alumnoRepository.findOne({
      where: { no_control: noControl }
    });

    if (!entity) {
      return null;
    }

    return new AlumnoDatosAcademicos(
      entity.id,
      entity.id_alumno_personal,
      entity.no_control,
      entity.nip,
      entity.usuario,
      entity.telefono,
      entity.tipo_alumno,
      entity.periodo_ingreso_it,
      entity.ultimo_periodo_inscrito,
      entity.promedio_aritmetico_acumulado,
      entity.creditos_aprobados,
      entity.fecha_actualizacion,
    );
  }
}