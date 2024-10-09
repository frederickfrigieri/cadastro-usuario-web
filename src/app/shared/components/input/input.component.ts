import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() type: string = 'text';
  // @Input() id: string = '';
  // @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() formControlName: string = '';
  @Input() formGroup: any;

  // formControl = new FormControl('');
}
