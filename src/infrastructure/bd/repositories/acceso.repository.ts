import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Entity de infraestructura (tabla de la BD)
import { AccesoEntity as AccesoEntity } from '../entities/acceso.entity';

// Entity de dominio (modelo del negocio)
import { Acceso } from '../../../domain/entities/acceso.entity';

// Interfaz del repositorio (contrato del dominio)
import { IAccesoRepository } from '../../../domain/interfaces/acceso.repository.interface';

@Injectable()
export class AccesoRepository implements IAccesoRepository {

  constructor(
    @InjectRepository(AccesoEntity)
    private readonly accesoRepository: Repository<AccesoEntity>,
  ) {}

  async buscarPorUsuario(usuario: string): Promise<Acceso | null> {

  const accesoEntity = await this.accesoRepository.findOne({
    where: { usuario }
  });

  if (!accesoEntity) {
    return null;
  }

  return new Acceso(
    accesoEntity.id,
    accesoEntity.usuario,
    accesoEntity.contrasena,
    accesoEntity.nombre_usuario,
    accesoEntity.tipo_usuario,
    accesoEntity.status,
    accesoEntity.correo,
    accesoEntity.telefono
  );
}

}
