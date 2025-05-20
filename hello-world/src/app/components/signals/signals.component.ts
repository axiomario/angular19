import { Component, effect, EffectRef, Injector, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  standalone: true,
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent implements OnInit {
  public counter = signal(0);
  private logEffect?: EffectRef;

  constructor(private injector: Injector) {
    /*effect(() => {
      console.log('Counter value:', this.counter());
    });*/
  }

  ngOnInit(): void {
    this.logEffect = effect(() => {
      console.log('Counter value', this.counter());
    }, {
      injector: this.injector,
      manualCleanup: true
    });
  }

  public increment(): void {
    this.counter.update((value) => value + 1);
  }

  public stopEffect(): void {
    this.logEffect!.destroy();
  }
}
