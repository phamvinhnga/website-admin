import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAuthModel, UserSignInOutputModel } from 'src/app/models/auth.model';
import { ITokenUserSignInState } from 'src/app/states/login-page/login-page.state';
import { LoginPageGroupActions } from 'src/app/states/login-page/login-page.actions';
import { RoutingEnum } from 'src/app/enums/routing.enum';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(
    private readonly store:Store,
    private readonly authService:AuthService,
    private readonly router:Router
  ) { 
  }

  onSubmit(){
    // let token = {
    //   accessToken: "xx",
    //   refreshToken: "22"
    // } as ITokenUserSignInState;
    
    // this.store.dispatch(LoginPageGroupActions.storeTokenAction({ token: token  }));
    // // this.store.dispatch(LoginPageGroupActions.storeCurrentUserAction({ userInfomation: { id: 123, surname: "nga pham", name: "xas", fullName: "2323", extentionId: "121212"} as IUserInfomationSignInState }));
    // return;
    return this.authService.signIn({
      userName: this.username,
      password: this.password
    } as IAuthModel).subscribe(
      (token:UserSignInOutputModel) => {
        this.store.dispatch(LoginPageGroupActions.storeTokenAction({ token: {
          refreshToken: token.refreshToken,
          accessToken: token.accessToken,
          expire: token.expire
        } as ITokenUserSignInState }));
        setTimeout(() => {
          this.router.navigateByUrl(RoutingEnum.PostPage);
        }, 100);
      }
    );
  }
}
