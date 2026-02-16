import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

/**
 * Esta clase NO genera el token.
 * Esta clase SOLO valida el token.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      //Si el token esta expirado deniega el acceso
      ignoreExpiration: false,

      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  /**
   * Método validate
   * Este método se ejecuta AUTOMÁTICAMENTE cuando el token es válido.
   * Recibe el payload decodificado del JWT.
   * Ejemplo de payload:
   * Lo que retornemos aquí será inyectado en request.user
   */
  async validate(payload: any) {
    return {
      id: payload.sub,
      usuario: payload.usuario,
    };
  }
}