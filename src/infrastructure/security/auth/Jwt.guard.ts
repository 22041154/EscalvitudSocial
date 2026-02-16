import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    /*
    Si ocurrió un error o no hay usuario, significa que:
    - el token no existe
    - el token es inválido
    - el token expiró
    */

    if (err || !user) {
      throw new UnauthorizedException('No autorizado. Token inválido o no proporcionado.');
    }

    // Si el token es válido, devolvemos el usuario.
    return user;
  }
}