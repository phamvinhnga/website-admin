import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthModel, CurrentUserOutputModel, UserSignInOutputModel } from '../models/auth.model';
import { AuthLocalStorageEnum } from '../enums/local-storage.enum';

let _prefix = `${environment.coreServerURL}/api`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly router:Router
  ) { }

  signIn(input:AuthModel): Observable<UserSignInOutputModel> {
    return this.httpClient.post(`${_prefix}/auth/sign-in`, input).pipe(
      map(m => {
        return UserSignInOutputModel.fromJS(m);
      })
    );
  }

  refreshToken(): Observable<UserSignInOutputModel> {
    const option = {
      headers: new HttpHeaders({
        'refresh-token': localStorage.getItem(AuthLocalStorageEnum.RefreshToken) || '',
      })
    }
    return this.httpClient.get(`${_prefix}/auth/refresh-token`, option).pipe(
      map(m => {
        return UserSignInOutputModel.fromJS(m);
      })
    );
  }

  getCurrentUser() : Observable<CurrentUserOutputModel>{
    return this.httpClient.get(`${_prefix}/auth/current-user`, {}).pipe(
      map(m => {
        return CurrentUserOutputModel.fromJS(m);
      })
    );
  }

  logout(): void {
    this.router.navigateByUrl('dang-nhap');
  }
}
