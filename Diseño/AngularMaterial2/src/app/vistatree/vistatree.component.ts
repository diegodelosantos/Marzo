import { Component } from '@angular/core';
import { TreeComponent } from '../tree/tree.component';

@Component({
  selector: 'app-vistatree',
  standalone: true,
  imports: [TreeComponent],
  templateUrl: './vistatree.component.html',
  styleUrl: './vistatree.component.scss'
})
export class VistatreeComponent {

}
