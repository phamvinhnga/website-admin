import { createAction, createActionGroup, props } from '@ngrx/store';
import { LoginPageStateEnum } from 'src/app/enums/state.enum';
import { ITokenUserSignInState, IUserInfomationSignInState } from './login-page.state';

export class LoginPageGroupActions {

  static storeTokenFromLocalStoreAction = createAction(
    LoginPageStateEnum.StoreTokenFromLocalStoreAction,
  );

  static storeTokenAction = createAction(
    LoginPageStateEnum.StoreTokenAction, props<{ token: ITokenUserSignInState }>()
  );

  static storeCurrentUserApiAction = createAction(
    LoginPageStateEnum.StoreCurrentUserApiAction, props<{ userInfomation:IUserInfomationSignInState }>()
  );

  static getCurrentUserApiAction = createAction(
    LoginPageStateEnum.GetStoreCurrentUserApiAction
  );

};
