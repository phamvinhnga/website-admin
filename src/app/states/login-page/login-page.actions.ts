import { createAction, createActionGroup, props } from '@ngrx/store';
import { LoginPageStateEnum } from 'src/app/enums/state.enum';
import { ITokenUserSignInState } from './login-page.state';

export class LoginPageGroupActions {

  static storeTokenAction = createAction(
    LoginPageStateEnum.StoreTokenAction, props<{ token: ITokenUserSignInState }>()
  );

  static storeCurrentUserAction = createAction(
    LoginPageStateEnum.StoreCurrentUserAction, props<{ username: string; password: string }>()
  );
  
};
