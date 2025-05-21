import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { SignalsComponent } from './components/signals/signals.component';
import { ChildrenComponent } from './components/children/children.component';
import { DeferExampleComponent } from './components/defer-example/defer-example.component';

@Component({
  selector: 'app-root',
  imports: [
    InputOutputComponent,
    SignalsComponent,
    ChildrenComponent,
    DeferExampleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  user = 'Mario';

  public handleNameChange(): void {
    this.user = 'Alberto';
  }

  public handleNameEventSignal(name: string): void {
    console.log('Name event signal:', name);
  }
}
