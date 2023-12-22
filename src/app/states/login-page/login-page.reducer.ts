import { createReducer, on } from "@ngrx/store";
import { IUserSignInState } from "./login-page.state";
import { LoginPageGroupActions } from "./login-page.actions";
import { AuthEnum } from "src/app/enums/auth.enum";

export const initialState: IUserSignInState = {} as IUserSignInState;

export const storeTokenReducer = createReducer(
    initialState,
    on(LoginPageGroupActions.storeCurrentUserAction, (state, {username, password}) => {
        return {
            ...state,
            userInfomation: {
                username: username,
                password: password
            }
        }
    }),
    on(LoginPageGroupActions.storeTokenAction, (state, {token}) => {
        localStorage.setItem(AuthEnum[AuthEnum.AccessToken], token.accessToken);
        localStorage.setItem(AuthEnum[AuthEnum.RefreshToken], token.refreshToken);
        return {
            ...state,
            token: token
        }
    }),
)
