import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { currentUserSelector, tokenSelector } from './states/login-page/login-page.selector';
import { forkJoin } from 'rxjs';

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
    // this.store.select(tokenSelector).subscribe(res => {
    //   console.log(res);
    // });
    // this.store.select(currentUserSelector).subscribe(res => {
    //   console.log(res);
    // });
    forkJoin([
      this.store.select(tokenSelector),
      this.store.select(currentUserSelector)
    ]).subscribe(res =>{
      console.log(res);
    })
  }
}
