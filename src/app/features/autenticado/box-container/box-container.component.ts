import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-container',
  templateUrl: './box-container.component.html',
  styleUrl: './box-container.component.css'
})
export class BoxContainerComponent {
  @Input() titulo: string = '';
}
