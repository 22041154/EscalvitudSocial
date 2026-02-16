/*
  Entidad que representa la tabla de registro
  de calificaciones de los proyectos
  de residencia.
*/

import { Entity, Column, PrimaryGeneratedColumn, Check } from 'typeorm';

@Entity({ name: 'res_calif_docente', schema: 'residencias' })

export class ResCalifDocenteEntity {

  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 14, nullable: true })
  folio: string;

  @Column({ type: 'integer', nullable: true })
  calificacion: number;

  @Column({ type: 'timestamp', nullable: true })
  fecha: Date;

  @Column({ type: 'varchar', length: 5, nullable: true })
  captura: string;

  @Column({ name: 'folio_acta_residencia', type: 'integer', nullable: true })
  folioActaResidencia: number;

  @Column({ type: 'varchar', length: 6, nullable: true })
  dep: string;

  @Column({ type: 'varchar', length: 5, nullable: true })
  periodo: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  materia: string;

  @Column({ type: 'varchar', length: 3, nullable: true })
  grupo: string;

  //Quiza se deba cambiar a MayToOne para que sea Fk
  @Column({ name: 'id_alumno_academico', type: 'bigint', nullable: true })
  idAlumnoAcademico: number;
}
