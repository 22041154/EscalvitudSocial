import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'res_seguimiento', schema: 'residencias' })
export class ResSeguimientoEntity {

  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 10, nullable: true })
  primerSeg: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  segundoSeg: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  tercerSeg: string;

  @Column({ name: 'port_antproy', type: 'varchar', length: 10, nullable: true })
  portAntproy: string;

  @Column({ name: 'doc_interno', type: 'varchar', length: 10, nullable: true })
  docInterno: string;

  @Column({ name: 'reporte_fin', type: 'varchar', length: 12, nullable: true })
  reporteFin: string;

  @Column({ name: 'rev_fin', type: 'varchar', length: 10, nullable: true })
  revFin: string;

  @Column({ name: 'acta_reciv', type: 'varchar', length: 10, nullable: true })
  actaReciv: string;

  @Column({ name: 'acta_entreg', type: 'varchar', length: 10, nullable: true })
  actaEntreg: string;

  @Column({ type: 'varchar', length: 14, nullable: true })
  folio: string;

  @Column({ type: 'varchar', length: 6, nullable: true })
  dep: string;

  @Column({ type: 'varchar', length: 5, nullable: true })
  periodo: string;
}
