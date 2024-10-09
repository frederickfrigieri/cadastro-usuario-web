import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrl: './box-detail.component.css'
})
export class BoxDetailComponent {
  @Input() label: string = '';
  @Input() valor: string = '';
}
