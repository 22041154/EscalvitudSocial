/*
  Entidad que representa la tabla de los dadtos
  de las empresas que esagtn registradas para
  proyectos de residencias.
*/

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'res_empresas', schema: 'residencias' })
export class ResEmpresaEntity {

  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ name: 'nombre_empresa', type: 'varchar', length: 200 })
  nombreEmpresa: string;
}
