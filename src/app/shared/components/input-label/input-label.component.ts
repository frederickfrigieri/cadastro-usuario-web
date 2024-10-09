import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-label',
  templateUrl: './input-label.component.html',
  styleUrl: './input-label.component.css'
})
export class InputLabelComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() formControlName: string = ''
}
