import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAccesoRepository } from '../../../domain/repositories/acceso.repository.interface';

@Injectable()
export class IniciarSesionUseCase {

  constructor(
    // Aquí usamos el token de inyección
    @Inject('IAccesoRepository')
    private readonly accesoRepository: IAccesoRepository,
    private readonly jwtService: JwtService,
  ) {}

  async ejecutar (usuario: string, password: string,): Promise <{access_token: string}> {
    const user = await this.accesoRepository.buscarPorUsuario(usuario);

    if (!user || user.contrasena !== password) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const payload = {
      sub: user.id,
      usuario: user.usuario,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
