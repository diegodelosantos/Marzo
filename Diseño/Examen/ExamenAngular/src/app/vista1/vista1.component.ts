import { Component } from '@angular/core';
import { CardFancyExample } from '../card/card.component';
import { CardFancyExample2 } from '../card2/card.component';
import { CardFancyExample3 } from '../card3/card.component';
import { CardFancyExample4 } from '../card4/card.component';

@Component({
  selector: 'app-vista1',
  standalone: true,
  imports: [CardFancyExample, CardFancyExample2,CardFancyExample3,CardFancyExample4],
  templateUrl: './vista1.component.html',
  styleUrl: './vista1.component.scss'
})
export class Vista1Component {

}
