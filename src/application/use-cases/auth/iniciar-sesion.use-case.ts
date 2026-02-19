import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAlumnoDatosAcademicosRepository } from '../../../domain/interfaces/alumnos_datos_academicos.repository.interface';

@Injectable()
export class IniciarSesionUseCase {

  constructor(
    @Inject('IAlumnoDatosAcademicosRepository')
    private readonly alumnoRepository: IAlumnoDatosAcademicosRepository,
    private readonly jwtService: JwtService,
  ) {}

  async ejecutar(noControl: string, nip: string): Promise<{ access_token: string }> {

    const alumno = await this.alumnoRepository.buscarPorNoControl(noControl);

    if (!alumno) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    if (!alumno.validarNip(Number(nip))) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const payload = {
      sub: alumno.id,
      no_control: alumno.noControl,
      usuario: alumno.usuario,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}