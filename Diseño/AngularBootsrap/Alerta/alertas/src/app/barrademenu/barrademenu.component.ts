import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'boot-barrademenu',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './barrademenu.component.html',
  styleUrl: './barrademenu.component.scss'
})
export class BarrademenuComponent {
  @Input() opciones!: string[];
  @Input() colorfondo!: string;
  @Output() presionopcion = new EventEmitter();

  presion(i: number): void {
    this.presionopcion.emit(i);
  }
}
