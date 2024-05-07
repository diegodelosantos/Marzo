import { Component, Input } from '@angular/core';

@Component({
  selector: 'boot-tabla',
  standalone: true,
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {
  @Input() datos: String[][]=[];
}
