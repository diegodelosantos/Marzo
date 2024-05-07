import { Component,Input } from '@angular/core';

@Component({
  selector: 'boot-alerta',
  standalone: true,
  imports: [],
  templateUrl: './alerta.component.html',
  styleUrl: './alerta.component.scss'
})
export class AlertaComponent {
  @Input() color!: string;
  @Input() mensaje!: string;
}
