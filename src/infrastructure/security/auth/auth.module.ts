import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from '../../../application/controllers/auth/auth.controller';
import { IniciarSesionUseCase } from '../../../application/use-cases/auth/iniciar-sesion.use-case';
import { AccesoModule } from '../../modules/acceso.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [

    // Módulo que contiene la implementación del repositorio
    AccesoModule,

    // Configuración del JWT
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');

        return {
          secret: secret,
          signOptions: {
            expiresIn: '3600s'
          }
        };
      },
    }),
  ],

  // Aquí registramos el CASO DE USO, no un service
  providers: [
    JwtStrategy,
    IniciarSesionUseCase
  ],

  // Controladores que usan este módulo
  controllers: [
    AuthController
  ],

  // Exportamos el caso de uso si otros módulos lo necesitan
  exports: [
    IniciarSesionUseCase,
    JwtModule
  ],
})
export class AuthModule {}
