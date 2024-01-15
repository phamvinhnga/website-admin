import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { LoginPageGroupActions } from './login-page.actions';
import { IUserInfomationSignInState } from './login-page.state';

@Injectable()
export class LoginPageEffects {

  login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(LoginPageGroupActions.getCurrentUserApiAction),
    exhaustMap(action =>
      this.authService.getCurrentUser().pipe(
        map((userInfomation:IUserInfomationSignInState) => LoginPageGroupActions.storeCurrentUserApiAction({ userInfomation }))
      )
    )
  )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}