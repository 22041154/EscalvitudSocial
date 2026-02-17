import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Módulos
import { BdModule } from './infrastructure/modules/bd.module';
import { AuthModule } from './infrastructure/security/auth/auth.module';
import { AccesoModule } from './infrastructure/modules/acceso.module';

// Controller de prueba
import { TestController } from './application/controllers/tests/test.controller';

@Module({
  imports: [

    // Variables de entorno
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // Base de datos
    BdModule,

    // Acceso a datos
    AccesoModule,

    // Autenticación
    AuthModule,

  ],

  controllers: [
    TestController
  ],

})
export class AppModule {}
