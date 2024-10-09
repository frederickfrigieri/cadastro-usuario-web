import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ContainerComponent } from './container/container.component';
import { InputLabelComponent } from './input-label/input-label.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [InputComponent, InputLabelComponent, ContainerComponent, FormContainerComponent],
  exports: [InputComponent, InputLabelComponent, ContainerComponent, FormContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
