import { Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent {
  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenio: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSeleccionado:string = 'Todos'

  constructor(){
    this.todos = 0
    this.masculino = 0
    this.femenio = 0
  }

  radioChange(){
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado)
  }

}
