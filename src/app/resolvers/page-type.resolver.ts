import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PageTypeEnum } from '../enums/page-type.enum';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginPageTypeResolver implements Resolve<string> {

  constructor() {}

  resolve(){
    return of(PageTypeEnum.Login);
  }
}