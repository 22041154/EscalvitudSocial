export class AlumnoDatosAcademicos {
  constructor(
    public readonly id: number,
    public readonly idAlumnoPersonal: number,
    public readonly noControl: string,
    public readonly nip: number,
    public readonly usuario?: string,
    public readonly telefono?: string,
    public readonly tipoAlumno?: string,
    public readonly periodoIngresoit?: string,
    public readonly ultimoPeriodoInscrito?: string,
    public readonly promedioAritmeticoAcumulado?: number,
    public readonly creditosAprobados?: number,
    public readonly fechaActualizacion?: Date,
  ) {}

  validarNip(nipIngresado: number): boolean {
    return this.nip === nipIngresado;
  }
}