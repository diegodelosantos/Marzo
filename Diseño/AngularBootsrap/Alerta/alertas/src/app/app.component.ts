import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertaComponent } from './alerta/alerta.component';
import { BarrademenuComponent } from './barrademenu/barrademenu.component';
import { TablaComponent } from './tabla/tabla.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { Tarjeta } from './tarjeta';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertaComponent, BarrademenuComponent, TablaComponent, TarjetaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alertas';
  opciones = [
    "Alerta", "Tabla", "Tarjeta"
  ];

  // presion(op: number) {
  //   alert("Se informa que se presiono la opcion " + op);
  
  // };

  // da: string[][] = [
  //   ["Artículo", "Descripción", "Precio","Stock"],
  //   ["Artículo 1", "Descripción 1", "$10.00","30"],
  //   ["Artículo 2", "Descripción 2", "$20.00","33"],
  //   ["Artículo 3", "Descripción 3", "$15.00","72"],
  //   ["Artículo 4", "Descripción 4", "$25.00","91"],
  //   ["Artículo 5", "Descripción 5", "$30.00","172"]
  // ];
  // tarjeta:Tarjeta={nombre:'Juan Pablo',mail:'juanpablo@gmail.com',foto:'https://www.scratchya.com.ar/angular/fotos/persona1.jpg'};
}
