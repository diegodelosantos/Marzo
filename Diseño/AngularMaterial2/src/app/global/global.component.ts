import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { CardComponent } from '../card/card.component';
// import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-global',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './global.component.html',
  styleUrl: './global.component.scss'
})
export class GlobalComponent {

}
