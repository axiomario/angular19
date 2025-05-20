import { Component, effect, viewChild, ViewChild } from '@angular/core';
import { ChildrenCounterComponent } from './children-counter/children-counter.component';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [ChildrenCounterComponent],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {
  public counter = viewChild(ChildrenCounterComponent);
  //@ViewChild(ChildrenCounterComponent) counter?: ChildrenCounterComponent;

  constructor() {
    effect(() => {
      this.counter()!.increment();
    })
  }

  /*ngAfterViewInit() {
    if (this.counter) {
      this.counter.increment();
    }
  }*/
}
