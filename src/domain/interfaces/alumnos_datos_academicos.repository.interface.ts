import { AlumnoDatosAcademicos } from "../../dtos/POCOS/alumnos_datos_academicos.entity";
import { LoginAlumnoResponse } from '../../dtos/responses/auth/login_alumno.response';

export interface IAlumnoDatosAcademicosRepository {
  BuscarPorNoControl(noControl: string): Promise<AlumnoDatosAcademicos | null>;
  ObtenerDatosLoginPorNoControl(noControl: string): Promise<LoginAlumnoResponse | null>;
}