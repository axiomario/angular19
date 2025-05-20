import { CommonModule } from '@angular/common';
import { Component, computed, effect, EffectRef, Injector, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent implements OnInit {
  public counter = signal(0);
  private logEffect?: EffectRef;
  public products = signal<Product[]>([]);
  private observable = interval(1000);
  private observableSignal = toSignal(this.observable);
  public readonly totalAmount = computed(() => {
    return this.products().reduce((acc, product) => acc + product.price, 0);
  });

  constructor(private injector: Injector) {
    /*effect(() => {
      console.log('Counter value:', this.counter());
    });*/
    effect(() => {
      console.log('toSignal:', this.observableSignal());
    });
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

  public addProduct():void {
    const product = new Product(this.products().length + 1, `Product${this.products().length + 1}`, (this.products().length + 1)*100);
    this.products.update((products) => [...products, product]);
  }
}

class Product {
  constructor(public id: number, public name: string, public price: number) {}
}
