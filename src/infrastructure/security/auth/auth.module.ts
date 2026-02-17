import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from '../../../application/controllers/auth/auth.controller';
import { IniciarSesionUseCase } from '../../../application/use-cases/auth/iniciar-sesion.use-case';
import { AccesoModule } from '../../modules/acceso.module';

@Module({
  imports: [
    AccesoModule,

    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: '3600s',
        },
      }),
    }),
  ],

  providers: [
    IniciarSesionUseCase
  ],

  controllers: [
    AuthController
  ],

  exports: [
    IniciarSesionUseCase,
    JwtModule
  ],
})
export class AuthModule {}
