import { Component, EventEmitter, input, Input, Output, computed, output } from '@angular/core';

const toCapitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

@Component({
  selector: 'input-output',
  imports: [],
  standalone: true,
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss'
})
export class InputOutputComponent {
  @Input({ required: true }) name!: string;
  @Output() nameChange = new EventEmitter<void>();
  public nameSignal = input.required<string, string>({
    transform: toCapitalize
  });
  public nameEventSignal = output<string>();

  public changeName() {
    this.nameChange.emit();
    this.nameEventSignal.emit(this.name);
  }
}
