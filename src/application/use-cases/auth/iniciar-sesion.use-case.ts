import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAlumnoDatosAcademicosRepository } from '../../../domain/interfaces/alumnos_datos_academicos.repository.interface';
import { LoginAlumnoResponse } from '../../../dtos/responses/auth/login_alumno.response';

@Injectable()
export class IniciarSesionUseCase {

  constructor(
    @Inject('IAlumnoDatosAcademicosRepository')
    private readonly alumnoRepository: IAlumnoDatosAcademicosRepository,
    private readonly jwtService: JwtService,
  ) {}

  async Ejecutar(noControl: string, nip: string): Promise<LoginAlumnoResponse> {

    const alumno = await this.alumnoRepository.BuscarPorNoControl(noControl);

    if (!alumno) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    if (!alumno.ValidarNip(Number(nip))) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const datoLogin = await this.alumnoRepository.ObtenerDatosLoginPorNoControl(noControl);

    if (!datoLogin) {
      throw new UnauthorizedException('No se pudieron obtener los datos del alumno');
    }

    const payload = {
      sub: alumno.id,
      no_control: alumno.noControl,
      usuario: alumno.usuario,
    };

    datoLogin.access_token = await this.jwtService.signAsync(payload);

    return datoLogin;
  }

}