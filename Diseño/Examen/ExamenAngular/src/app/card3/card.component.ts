import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-card3',
  templateUrl: 'card.component.html',
  styleUrl: 'card.component.scss',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class CardFancyExample3 {}
