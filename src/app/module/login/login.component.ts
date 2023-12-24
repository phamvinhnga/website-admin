import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuthModel } from '../shared/model/auth.model';
import { AuthService } from '../shared/service/auth.service';
import { Store } from '@ngrx/store';
import { UserSignInOutputModel } from 'src/app/models/auth.model';
import { ITokenUserSignInState, IUserInfomationSignInState } from 'src/app/states/login-page/login-page.state';
import { LoginPageGroupActions } from 'src/app/states/login-page/login-page.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(
    private route: ActivatedRoute, 
    private readonly store:Store,
    private readonly authService:AuthService,
    private readonly router:Router
  ) { 
  }

  ngOnInit() {
    console.log(this.route.snapshot.data);
  }

  onSubmit(){
    let token = {
      accessToken: "xx",
      refreshToken: "22"
    } as ITokenUserSignInState;
    this.store.dispatch(LoginPageGroupActions.storeTokenAction({ token: token  }));
    this.store.dispatch(LoginPageGroupActions.storeCurrentUserAction({ userInfomation: { id: 123, surname: "nga pham", name: "xas", fullName: "2323", extentionId: "121212"} as IUserInfomationSignInState }));
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
