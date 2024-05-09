import { Component } from '@angular/core';
import { AlertaComponent } from '../alerta/alerta.component';

@Component({
  selector: 'app-vista-alerta',
  standalone: true,
  imports: [AlertaComponent],
  templateUrl: './vista-alerta.component.html',
  styleUrl: './vista-alerta.component.scss'
})
export class VistaAlertaComponent {

}

