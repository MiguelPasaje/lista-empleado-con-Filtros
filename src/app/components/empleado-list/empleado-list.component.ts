import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  listEmpleados: Empleado[]=[
    {
      Legajo: 1,
      nombre: 'Juan',
      Apellido: 'asd',
      Sexo: 'M',
      Salario: 123,
    },
    {
      Legajo: 2,
      nombre: 'andres',
      Apellido: 'asd',
      Sexo: 'F',
      Salario: 123,
    },
    {
      Legajo: 3,
      nombre: 'a',
      Apellido: 'asd',
      Sexo: 'M',
      Salario: 123,
    },
    {
      Legajo: 4,
      nombre: 'b',
      Apellido: 'asd',
      Sexo: 'F',
      Salario: 123,
    },
    {
      Legajo: 5,
      nombre: 'n',
      Apellido: 'asd',
      Sexo: 'M',
      Salario: 123,
    },
    {
      Legajo: 5,
      nombre: 'ximena',
      Apellido: 'asd',
      Sexo: 'F',
      Salario: 123,
    },
  ]
  radioButtonSeleccionado:string = 'Todos'

  obtenerTotalEmpleados():number{
    return this.listEmpleados.length
  }
  obtenerTotalEmpleadosFemenino():number{
    return this.listEmpleados.filter(list => list.Sexo === 'F').length
  }
  obtenerTotalEmpleadosMasculinos():number{
    return this.listEmpleados.filter(list => list.Sexo === 'M').length
  }

}
