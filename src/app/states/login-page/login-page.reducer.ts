import { createReducer, on } from "@ngrx/store";
import { IUserSignInState } from "./login-page.state";
import { LoginPageGroupActions } from "./login-page.actions";
import { AuthLocalStorageEnum } from "src/app/enums/local-storage.enum";

export const initialState: IUserSignInState = {} as IUserSignInState;

export const storeTokenReducer = createReducer(
    initialState,
    on(LoginPageGroupActions.storeCurrentUserAction, (state, { userInfomation }) => {
        return {
            ...state,
            userInfomation: userInfomation
        }
    }),
    on(LoginPageGroupActions.storeTokenAction, (state, {token}) => {
        if(token){
            localStorage.setItem(AuthLocalStorageEnum.AccessToken, token.accessToken);
            localStorage.setItem(AuthLocalStorageEnum.RefreshToken, token.refreshToken);
        }
        return {
            ...state,
            token: token
        }
    }),
)
