/*
  Ebtidad que representa la tabla de los 
  proyectos de residencias
*/

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'residencias', schema: 'residencias' })

export class ResidenciasEntity {

  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ name: 'id_periodo', type: 'bigint' })
  idPeriodo: number;

  @Column({ name: 'id_alumno_academico', type: 'bigint' })
  idAlumnoAcademico: number;

  @Column({ name: 'id_empresa', type: 'bigint' })
  idEmpresa: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  empresa: string;

  @Column({ name: 'asesor_interno', type: 'varchar', length: 100, nullable: true })
  asesorInterno: string;

  @Column({ name: 'estatus_residencia', type: 'varchar', length: 1, nullable: true })
  estatusResidencia: string;

  @Column({ name: 'fecha_inicio', type: 'date', nullable: true })
  fechaInicio: Date;

  @Column({ name: 'fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'nombre_proyecto', type: 'varchar', length: 200, nullable: true })
  nombreProyecto: string;

  @Column({ name: 'nombre_asesor_externo', type: 'varchar', length: 60, nullable: true })
  nombreAsesorExterno: string;

  @Column({ type: 'integer', nullable: true })
  calificacion: number;

  @Column({ name: 'folio_acta_residencia', type: 'varchar', length: 12, nullable: true })
  folioActaResidencia: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  observaciones: string;
}

