import { ContinuationRegisterComponent } from './../continuation-register/continuation-register.component';
import { SharedMaterialModule } from './../../shared/shared-material/shared-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    ContinuationRegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedMaterialModule,
  ]
})
export class LoginModule { }
