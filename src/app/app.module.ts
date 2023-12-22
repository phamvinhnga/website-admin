import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './Interceptor/jwt.interceptor';
import { LoginModule } from './module/login/login.module';
import { AuthService } from './module/shared/service/auth.service';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StoreModule.forRoot({}),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: JwtInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
