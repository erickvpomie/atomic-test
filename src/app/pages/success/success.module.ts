import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessRoutingModule } from './success-routing.module';
import {SuccessComponent} from "./success.component";
import {ThemeModule} from "../../theme/theme.module";


@NgModule({
  declarations: [SuccessComponent],
  imports: [
    CommonModule,
    SuccessRoutingModule,
    ThemeModule
  ]
})
export class SuccessModule { }
