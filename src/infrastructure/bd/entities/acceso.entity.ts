import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('acceso', { schema: 'seguridad' })
export class AccesoEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 30, unique: true })
  usuario: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  nombre_usuario: string;

  @Column({ type: 'varchar', length: 100 })
  contrasena: string;

  @Column({ type: 'varchar', length: 3, nullable: true })
  tipo_usuario: string;

  @Column({ type: 'varchar', length: 1, nullable: true })
  status: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  correo: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  telefono: string;
}