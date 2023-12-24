import { Component, OnInit } from '@angular/core';
import { PageTypeEnum } from './enums/page-type.enum';
import { filter } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RoutingEnum } from './enums/routing.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  pageType: string | undefined;
  pageTypeEnum = PageTypeEnum;

  constructor(
    private route: ActivatedRoute, 
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