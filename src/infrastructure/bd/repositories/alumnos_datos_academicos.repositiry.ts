import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlumnoDatosAcademicosEntity } from '../entities/alumnos_datos_academicos.entity';
import { AlumnoDatosAcademicos } from '../../../dtos/POCOS/alumnos_datos_academicos.entity';
import { IAlumnoDatosAcademicosRepository } from '../../../domain/interfaces/alumnos_datos_academicos.repository.interface';
import { LoginAlumnoResponse } from '../../../dtos/responses/auth/login_alumno.response';
import { AlumnosDatosPersonalesEntity } from '../entities/aluumnos_datos_personales.entity';

@Injectable()
export class AlumnoDatosAcademicosRepository implements IAlumnoDatosAcademicosRepository {

  constructor(
    @InjectRepository(AlumnoDatosAcademicosEntity)
    private readonly alumnoRepository: Repository<AlumnoDatosAcademicosEntity>,
  ) {}

  private MapearEntidadADominio(entity: AlumnoDatosAcademicosEntity): AlumnoDatosAcademicos {
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

  async BuscarPorNoControl(noControl: string): Promise<AlumnoDatosAcademicos | null> {
    const entity = await this.alumnoRepository.findOne({
      where: { no_control: noControl }
    });

    return entity ? this.MapearEntidadADominio(entity) : null;
  }

  async ObtenerDatosLoginPorNoControl(noControl: string): Promise<LoginAlumnoResponse | null> {
    const row = await this.alumnoRepository
      .createQueryBuilder('academico')
      .leftJoin(
        AlumnosDatosPersonalesEntity,
        'personal',
        'personal.id = academico.id_alumno_personal'
      )
      .select([
        'academico.no_control AS matricula',
        'academico.creditos_aprobados AS creditos_aprobados',
        `CONCAT(personal.nombre, ' ', personal.apellido_paterno, ' ', personal.apellido_materno) AS nombre_completo`,
      ])
      .where('academico.no_control = :noControl', { noControl })
      .getRawOne();

    if (!row) {
      return null;
    }

    const response = new LoginAlumnoResponse();
    response.type = 'alumnos';
    response.attributes = {
      nombre_completo: row.nombre_completo,
      matricula: row.matricula,
      creditos_aprobados: row.creditos_aprobados,
    };

    return response;
  }

}