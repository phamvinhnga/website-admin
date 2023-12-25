import { Component, OnInit } from '@angular/core';
import { PageTypeEnum } from './enums/page-type.enum';
import { filter } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RoutingEnum } from './enums/routing.enum';
import { Store } from '@ngrx/store';
import { LoginPageGroupActions } from './states/login-page/login-page.actions';
import { LoginPageGroupSelectors } from './states/login-page/login-page.selector';
import { ITokenUserSignInState } from './states/login-page/login-page.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  pageType: string | undefined;
  pageTypeEnum = PageTypeEnum;

  constructor(
    private router: Router) 
  {
  }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event:any) => {
      if(event.urlAfterRedirects === RoutingEnum.LoginPage){
        this.pageType = this.pageTypeEnum.Login;
      }
      else{
        this.pageType = this.pageTypeEnum.Manage;
      }
    });
  }
}