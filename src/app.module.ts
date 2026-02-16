import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Módulo de conexión a base de datos
import { BdModule } from './infrastructure/modules/bd.module';

// Módulo de autenticación
import { AuthModule } from './infrastructure/security/auth/auth.module';

// Módulo de acceso (repositorio)
import { AccesoModule } from './infrastructure/modules/acceso.module';

/**
 * AppModule
 *
 * Este es el módulo raíz de la aplicación.
 * Aquí se importan los módulos principales.
 *
 * NO debe contener lógica de negocio.
 */
@Module({
  imports: [

    // Configuración global de variables de entorno
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // Conexión a la base de datos
    BdModule,

    // Módulo de acceso a datos de usuarios
    AccesoModule,

    // Módulo de autenticación
    AuthModule,

  ],

})
export class AppModule {}
