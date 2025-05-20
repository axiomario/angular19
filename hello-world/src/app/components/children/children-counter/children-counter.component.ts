import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-children-counter',
  imports: [],
  standalone: true,
  templateUrl: './children-counter.component.html',
  styleUrl: './children-counter.component.scss'
})
export class ChildrenCounterComponent {
  public counter = signal(0);

  public increment(): void {
    this.counter.update(value => value + 1);
  }
}
