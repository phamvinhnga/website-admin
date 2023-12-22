import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin } from 'rxjs';
import { LoginPageGroupSelectors } from './states/login-page/login-page.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly store:Store
  ) {}
  
  ngOnInit() {
    this.store.select(LoginPageGroupSelectors.abcInSelector).subscribe(res => {
      console.log(res);
    });
  }
}