import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GenericButtonComponent} from "./components/generic-button/generic-button.component";
import {GenericCardComponent} from "./components/generic-card/generic-card.component";
import {GenericFooterComponent} from "./components/generic-footer/generic-footer.component";



@NgModule({
  declarations: [
    GenericButtonComponent,
    GenericCardComponent,
    GenericFooterComponent
  ],
  exports: [
    GenericButtonComponent,
    GenericCardComponent,
    GenericFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
