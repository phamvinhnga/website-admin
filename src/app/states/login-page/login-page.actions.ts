import { createAction, props } from '@ngrx/store';
import { LoginPageStateEnum } from 'src/app/enums/state.enum';
import { ITokenUserSignInState } from './login-page.state';

export const storeCurrentUserAction = createAction(
    LoginPageStateEnum.StoreCurrentUserAction,
    props<{ username: string; password: string }>()
);

export const storeTokenAction = createAction(
    LoginPageStateEnum.StoreTokenAction,
    props<{ token:ITokenUserSignInState }>()
);