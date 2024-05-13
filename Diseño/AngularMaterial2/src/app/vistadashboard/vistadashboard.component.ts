import { Component } from '@angular/core';
import { DaschboardComponent } from '../daschboard/daschboard.component';

@Component({
  selector: 'app-vistadashboard',
  standalone: true,
  imports: [DaschboardComponent],
  templateUrl: './vistadashboard.component.html',
  styleUrl: './vistadashboard.component.scss'
})
export class VistadashboardComponent {

}
