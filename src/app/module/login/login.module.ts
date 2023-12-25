import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StoreModule } from '@ngrx/store';
import { LoginPageStateEnum } from 'src/app/enums/state.enum';
import * as StoreTokenReducers from 'src/app/states/login-page/login-page.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginPageEffects } from 'src/app/states/login-page/login-page.effect';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    StoreModule.forFeature(LoginPageStateEnum.FeatureKey, StoreTokenReducers.storeTokenReducer),
    EffectsModule.forFeature([LoginPageEffects])
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
