import { Component } from '@angular/core';
import { ArrastrarComponent } from './arrastrar/arrastrar.component';

@Component({
  selector: 'app-vista1',
  standalone: true,
  imports: [ArrastrarComponent],
  templateUrl: './vista1.component.html',
  styleUrl: './vista1.component.scss'
})
export class Vista1Component {

}
