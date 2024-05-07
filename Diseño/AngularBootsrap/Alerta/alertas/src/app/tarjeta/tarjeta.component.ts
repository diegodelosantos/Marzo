import { Component,Input } from '@angular/core';
import { Tarjeta } from '../tarjeta';
@Component({
  selector: 'boot-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.scss'
})
export class TarjetaComponent {
  @Input() datos: Tarjeta = { nombre: '', mail: '', foto: '' };
}
