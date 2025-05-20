import { Component, contentChild, effect, ElementRef } from '@angular/core';

@Component({
  selector: 'app-children-my-card',
  standalone: true,
  imports: [],
  templateUrl: './children-my-card.component.html',
  styleUrl: './children-my-card.component.scss'
})
export class ChildrenMyCardComponent {
  public title = contentChild<ElementRef>('title');

  constructor() {
    effect(() => {
      console.log(this.title()!.nativeElement.textContent);
    });
  }
}
