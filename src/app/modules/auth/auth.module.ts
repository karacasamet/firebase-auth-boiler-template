import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './containers/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


@NgModule({
  declarations: [AuthLayoutComponent, LoginComponent, SignupComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
