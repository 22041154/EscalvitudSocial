import { AlumnoDatosAcademicos } from '../entities/alumnos_datos_academicos.entity';

export interface IAlumnoDatosAcademicosRepository {
  buscarPorNoControl(noControl: string): Promise<AlumnoDatosAcademicos | null>;
}