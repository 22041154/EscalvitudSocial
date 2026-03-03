export class LoginAlumnoResponse {

  type: string;

  attributes: {
    nombre_completo: string;
    matricula: string;
    creditos_aprobados: number;
  };

  access_token: string;

}