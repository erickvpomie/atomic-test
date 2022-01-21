import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GenericButtonComponent} from "./components/generic-button/generic-button.component";
import {GenericCardComponent} from "./components/generic-card/generic-card.component";
import {GenericFooterComponent} from "./components/generic-footer/generic-footer.component";
import {GenericInputComponent} from "./components/generic-input/generic-input.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    GenericButtonComponent,
    GenericCardComponent,
    GenericFooterComponent,
    GenericInputComponent
  ],
  exports: [
    GenericButtonComponent,
    GenericCardComponent,
    GenericFooterComponent,
    GenericInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ThemeModule { }
