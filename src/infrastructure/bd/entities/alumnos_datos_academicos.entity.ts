import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('alumnos_datos_academicos', { schema: 'alumnos' })
export class AlumnoDatosAcademicosEntity {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint' })
  id_alumno_personal: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  no_control: string;

  @Column({ type: 'int' })
  nip: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefono: string;

  @Column({ type: 'numeric', nullable: true })
  tipo_ingreso: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  periodo_ingreso_it: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  ultimo_periodo_inscrito: string;

  @Column({ type: 'numeric', precision: 5, scale: 2, nullable: true })
  promedio_periodo_anterior: number;

  @Column({ type: 'numeric', precision: 5, scale: 2, nullable: true })
  promedio_aritmetico_acumulado: number;

  @Column({ type: 'int', nullable: true })
  creditos_aprobados: number;

  @Column({ type: 'int', nullable: true })
  creditos_cursados: number;

  @Column({ type: 'numeric', precision: 5, scale: 2, nullable: true })
  promedio_final_alcanzado: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  tipo_servicio_medico: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  clave_servicio_medico: string;

  @Column({ type: 'int', nullable: true })
  periodos_revalidacion: number;

  @Column({ type: 'numeric', precision: 5, scale: 2, nullable: true })
  indice_reprobacion_acumulado: number;

  @Column({ type: 'varchar', length: 10, nullable: true })
  tipo_alumno: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  usuario: string;

  @Column({ type: 'timestamp', nullable: true })
  fecha_actualizacion: Date;

  @Column({ type: 'int', nullable: true })
  no_ficha: number;
}