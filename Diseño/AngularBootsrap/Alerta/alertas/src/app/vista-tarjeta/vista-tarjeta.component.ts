import { Component } from '@angular/core';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';
import { Tarjeta } from '../tarjeta';

@Component({
  selector: 'app-vista-tarjeta',
  standalone: true,
  imports: [TarjetaComponent],
  templateUrl: './vista-tarjeta.component.html',
  styleUrl: './vista-tarjeta.component.scss'
})
export class VistaTarjetaComponent {
  tarjeta:Tarjeta={nombre:'Juan Pablo',mail:'juanpablo@gmail.com',foto:'https://www.scratchya.com.ar/angular/fotos/persona1.jpg'};
}
