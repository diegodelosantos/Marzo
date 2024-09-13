import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card5',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card5.component.html',
  styleUrl: './card5.component.scss'
})
export class Card5Component {

}
