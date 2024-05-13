import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-vistatable',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './vistatable.component.html',
  styleUrl: './vistatable.component.scss'
})
export class VistatableComponent {

}
