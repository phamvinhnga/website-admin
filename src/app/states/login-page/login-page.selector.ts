import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITokenUserSignInState, IUserInfomationSignInState, IUserSignInState } from './login-page.state';
import { LoginPageStateEnum } from 'src/app/enums/state.enum';

export class LoginPageGroupSelectors {

    static selectFeature = createFeatureSelector<IUserSignInState>(LoginPageStateEnum.FeatureKey);

    static tokenSelector = createSelector(
        LoginPageGroupSelectors.selectFeature,
        (state: IUserSignInState) => state.token
    );

    static isAuthenticatedSelector = createSelector(
        LoginPageGroupSelectors.selectFeature,
        (state: IUserSignInState) : boolean => !state.token?.accessToken ? false : true
    );


    static currentUserSelector = createSelector(
        LoginPageGroupSelectors.selectFeature,
        (state: IUserSignInState) => state.userInfomation
    );

    static userSignInSelector = createSelector(
        LoginPageGroupSelectors.tokenSelector,
        LoginPageGroupSelectors.currentUserSelector,
        (token: ITokenUserSignInState | undefined, userInfomation:IUserInfomationSignInState | undefined) => {
            return {
                token: token,
                userInfomation: userInfomation
            }
        }
    );
    
    static  abcInSelector = createSelector(
        LoginPageGroupSelectors.selectFeature,
        (state: IUserSignInState) => state
    );
}

