import { AlumnoDatosAcademicos } from '../../dtos/POCOS/alumnos_datos_academicos.entity';

export interface IAlumnoDatosAcademicosRepository {
  buscarPorNoControl(noControl: string): Promise<AlumnoDatosAcademicos | null>;
}