export class Empleado {
  Legajo:number;
  nombre:string;
  Apellido:string;
  Sexo:string;
  Salario:number;

  constructor(
    Legajo:number,
    nombre:string,
    Apellido:string,
    Sexo:string,
    Salario:number,
  ){
    this.Legajo = Legajo
    this.nombre = nombre
    this.Apellido = Apellido
    this.Sexo = Sexo
    this.Salario = Salario
  }
}
