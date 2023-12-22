import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAuthModel } from '../shared/model/auth.model';
import { AuthService } from '../shared/service/auth.service';
import { Store } from '@ngrx/store';
import { UserSignInOutputModel } from 'src/app/models/auth.model';
import { ITokenUserSignInState } from 'src/app/states/login-page/login-page.state';
import { LoginPageGroupActions } from 'src/app/states/login-page/login-page.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username!: string;
  password!: string;
  token = {
    accessToken: "xx",
    refreshToken: "22"
  } as ITokenUserSignInState;
  constructor(
    private readonly store:Store,
    private readonly authService:AuthService,
    private readonly router:Router
  ) { 
  }

  ngOnInit() {
    // this.store.select(tokenSelector).subscribe(res => {
    //   console.log(res);
    // });
    // this.store.select(currentUserSelector).subscribe(res => {
    //   console.log(res);
    // });
    
    // this.store.select(userSignInSelector).subscribe(res => {
    //   console.log(res);
    // });
  }

  onSubmit(){
    let token = {
      accessToken: "xx",
      refreshToken: "22"
    } as ITokenUserSignInState;
    this.store.dispatch(LoginPageGroupActions.storeTokenAction({ token: token  }));

    this.store.dispatch(LoginPageGroupActions.storeCurrentUserAction({ username: this.username, password: this.password  }));

    return;

    return this.authService.signIn({
      userName: this.username,
      password: this.password
    } as IAuthModel).subscribe(
      (token:UserSignInOutputModel) => {
        this.store.dispatch(LoginPageGroupActions.storeTokenAction({ token }));
        this.router.navigateByUrl('cms');
      }
    );
  }
}
