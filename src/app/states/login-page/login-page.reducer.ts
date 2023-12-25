import { createReducer, on } from "@ngrx/store";
import { ITokenUserSignInState, IUserSignInState } from "./login-page.state";
import { LoginPageGroupActions } from "./login-page.actions";
import { AuthLocalStorageEnum } from "src/app/enums/local-storage.enum";

export const initialState: IUserSignInState = {} as IUserSignInState;

export const storeTokenReducer = createReducer(
    initialState,
    on(LoginPageGroupActions.storeTokenFromLocalStoreAction, (state) => {
        return {
            ...state,
            token: {
                accessToken: localStorage.getItem(AuthLocalStorageEnum.AccessToken),
                refreshToken: localStorage.getItem(AuthLocalStorageEnum.RefreshToken),
                expire: ""
            } as ITokenUserSignInState
        }
    }),
    on(LoginPageGroupActions.storeCurrentUserApiAction, (state, { userInfomation }) => {
        debugger
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
