export interface IUserSignInState {
    userInfomation:IUserInfomationSignInState | undefined;
    token: ITokenUserSignInState | undefined;
}

export interface ITokenUserSignInState{
    accessToken:string;
    expire:string;
    refreshToken:string;
}

export interface IUserInfomationSignInState{
    id:number | undefined;
    surname:string | undefined;
    name:string | undefined;
    fullName:string | undefined;
    extentionId:string | undefined;
}