import { createReducer, on } from "@ngrx/store";
import * as LoginPageActions from "./login-page.actions";
import { ITokenUserSignInState, IUserSignInState } from "./login-page.state";

export const initialState: IUserSignInState = {} as IUserSignInState;

export const storeTokenReducer = createReducer(
    initialState,
    on(LoginPageActions.storeCurrentUserAction, (state, {username, password}) => {
        return {
            ...state,
            userInfomation: {
                username: username,
                password: password
            }
        }
    }),
    on(LoginPageActions.storeTokenAction, (state, {token}) => {
        return {
            ...state,
            token: token
        }
    }),
)
