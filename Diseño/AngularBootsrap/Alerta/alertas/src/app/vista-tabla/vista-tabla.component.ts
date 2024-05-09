import { Component } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-vista-tabla',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './vista-tabla.component.html',
  styleUrl: './vista-tabla.component.scss'
})
export class VistaTablaComponent {
da: string[][] = [
  ["Artículo", "Descripción", "Precio","Stock"],
  ["Artículo 1", "Descripción 1", "$10.00","30"],
  ["Artículo 2", "Descripción 2", "$20.00","33"],
  ["Artículo 3", "Descripción 3", "$15.00","72"],
  ["Artículo 4", "Descripción 4", "$25.00","91"],
  ["Artículo 5", "Descripción 5", "$30.00","172"]
];
}
