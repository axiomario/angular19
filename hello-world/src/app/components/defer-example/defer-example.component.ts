import { Component } from '@angular/core';
import { DeferOneComponent } from './defer-one/defer-one.component';
import { DeferTwoComponent } from './defer-two/defer-two.component';

@Component({
  selector: 'app-defer-example',
  standalone: true,
  imports: [
    DeferOneComponent,
    DeferTwoComponent
  ],
  templateUrl: './defer-example.component.html',
  styleUrl: './defer-example.component.scss'
})
export class DeferExampleComponent {
  public ready = false;
}
