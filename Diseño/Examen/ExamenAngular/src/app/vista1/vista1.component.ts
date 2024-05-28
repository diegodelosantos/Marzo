import { Component } from '@angular/core';
import { CardFancyExample } from '../card/card.component';
import { CardFancyExample2 } from '../card2/card.component';
import { CardFancyExample3 } from '../card3/card.component';
import { CardFancyExample4 } from '../card4/card.component';
import { Card5Component } from '../card5/card5.component';
import { Card6Component } from '../card6/card6.component';
import { Card7Component } from '../card7/card7.component';
import { Card8Component } from '../card8/card8.component';

@Component({
  selector: 'app-vista1',
  standalone: true,
  imports: [CardFancyExample, CardFancyExample2,CardFancyExample3,CardFancyExample4,Card5Component,Card6Component,Card7Component,Card8Component],
  templateUrl: './vista1.component.html',
  styleUrl: './vista1.component.scss'
})
export class Vista1Component {

}
