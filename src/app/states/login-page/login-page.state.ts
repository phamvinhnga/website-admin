export interface IUserSignInState {
    userInfomation:IUserInfomationSignInState;
    token: ITokenUserSignInState;
}

export interface IUserInfomationSignInState{
    username:string;
    password:string;
}

export interface ITokenUserSignInState{
    accessToken:string;
    expire:string;
    refreshToken:string;
}