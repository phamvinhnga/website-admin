import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './Interceptor/jwt.interceptor';
import { LoginModule } from './module/login/login.module';
import { Store, StoreModule } from '@ngrx/store';
import { AppLayoutModule } from './module/layout/app.layout.module';
import { EffectsModule } from '@ngrx/effects';
import { ToastModule } from "primeng/toast";
import { MessageService } from 'primeng/api';
import { LoginPageTypeResolver } from './resolvers/page-type.resolver';
import { AuthGuard } from './guards/auth.guard';
import { LoginPageGroupActions } from './states/login-page/login-page.actions';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppLayoutModule,
    ToastModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    LoginPageTypeResolver,
    AuthGuard,
    MessageService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: JwtInterceptor, 
      multi: true 
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private store:Store){
    this.store.dispatch(LoginPageGroupActions.storeTokenFromLocalStoreAction());
  }
}
