import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-signal.component.html',
  styleUrl: './input-signal.component.scss'
})
export class InputSignalComponent {
  public name = model.required();
}
