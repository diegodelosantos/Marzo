import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, CardComponent, FooterComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
