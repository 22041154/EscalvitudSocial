import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../../../infrastructure/security/auth/Jwt.guard';
import { Request } from 'express';

@Controller('test')
@UseGuards(JwtGuard)
export class TestController {

  @Get()
  probar(@Req() req: Request) {

    const usuario = (req as any).user;

    return {
      mensaje: 'Acceso autorizado correctamente ✅',
      usuarioAutenticado: usuario
    };
  }

}
