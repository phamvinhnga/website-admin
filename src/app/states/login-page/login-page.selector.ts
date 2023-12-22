import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginPageFeatureKey } from 'src/app/enums/state.enum';
import { ITokenUserSignInState, IUserSignInState } from './login-page.state';

export const selectFeature = createFeatureSelector<IUserSignInState>(LoginPageFeatureKey.StoreToken);

export const tokenSelector = createSelector(
    selectFeature,
    (state: IUserSignInState) => state.token
);

export const currentUserSelector = createSelector(
    selectFeature,
    (state: IUserSignInState) => state.userInfomation
);