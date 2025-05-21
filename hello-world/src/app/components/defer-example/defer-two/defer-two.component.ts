import { Component } from '@angular/core';

@Component({
  selector: 'app-defer-two',
  standalone: true,
  imports: [],
  templateUrl: './defer-two.component.html',
  styleUrl: './defer-two.component.scss'
})
export class DeferTwoComponent {
  constructor() {
    console.log('DeferTwoComponent constructor');
  }
}
