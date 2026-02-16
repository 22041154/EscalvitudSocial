/*
  Entidad que representa la tabla con los 
  datos para registrar los alumnos en 
  proyectos de residencia.
*/

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'res_registro_alumnos', schema: 'residencias' })
export class ResRegistroAlumnosEntity {

  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 15, nullable: true })
  folio: string;

  @Column({ name: 'id_alumno_academico', type: 'bigint' })
  idAlumnoAcademico: number;

  @Column({ name: 'nombre_proyecto', type: 'varchar', length: 120, nullable: true })
  nombreProyecto: string;

  @Column({ name: 'id_empresa', type: 'bigint' })
  idEmpresa: number;

  @Column({ name: 'asesor_interno', type: 'varchar', length: 120, nullable: true })
  asesorInterno: string;

  @Column({ name: 'asesor_externo', type: 'varchar', length: 120, nullable: true })
  asesorExterno: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  dictamen: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  ciudad: string;

  @Column({ name: 'id_periodo', type: 'bigint' })
  idPeriodo: number;

  @Column({ name: 'puesto_asesor_externo', type: 'varchar', length: 60, nullable: true })
  puestoAsesorExterno: string;

  @Column({ name: 'telefono_y_extension', type: 'varchar', length: 20, nullable: true })
  telefonoYExtension: string;

  @Column({ type: 'varchar', length: 6, nullable: true })
  dep: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  revisor: string;
}
