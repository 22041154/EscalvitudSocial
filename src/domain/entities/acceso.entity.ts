export class Acceso {
  constructor(
    public readonly id: number,
    public readonly usuario: string,
    public readonly contrasena: string,
    public readonly nombreUsuario?: string,
    public readonly tipoUsuario?: string,
    public readonly status?: string,
    public readonly correo?: string,
    public readonly telefono?: string,
  ) {}

  validarPassword(password: string): boolean {
    return this.contrasena === password;
  }

  estaActivo(): boolean {
    return this.status === 'A';
  }
}
