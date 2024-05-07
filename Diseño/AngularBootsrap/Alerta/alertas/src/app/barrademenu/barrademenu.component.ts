import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'boot-barrademenu',
  standalone: true,
  imports: [],
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
