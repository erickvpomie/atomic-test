import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import {RegisterComponent} from "./register.component";
import {ThemeModule} from "../../theme/theme.module";


@NgModule({
  declarations: [ RegisterComponent ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ThemeModule
  ]
})
export class RegisterModule { }
