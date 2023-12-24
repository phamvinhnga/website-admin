import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class LoginEffects {

  userInfomationEffect$ = createEffect(() => this.actions$.pipe(
    ofType('[Movies Page] Load Movies'),
    exhaustMap(() => this.authService.getCurrentUser()
      .pipe(
        map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}