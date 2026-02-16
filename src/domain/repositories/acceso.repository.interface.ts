import { Acceso } from '../entities/acceso.entity';

export interface IAccesoRepository {

  buscarPorUsuario(usuario: string): Promise<Acceso | null>;

}
