import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StoreModule } from '@ngrx/store';
import { LoginPageFeatureKey } from 'src/app/enums/state.enum';
import * as StoreTokenReducers from 'src/app/states/login-page/login-page.reducer';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    StoreModule.forFeature(LoginPageFeatureKey.StoreToken, StoreTokenReducers.storeTokenReducer)
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
