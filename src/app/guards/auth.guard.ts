// src/app/auth.guard.ts

import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { LoginPageGroupSelectors } from '../states/login-page/login-page.selector';
import { map } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly store:Store,
        private readonly router: Router) {}

    canActivate() {
        return this.store.select(LoginPageGroupSelectors.isAuthenticatedSelector).pipe(map(isAuthenticated => {
            if (isAuthenticated) {
                return true;
            }
            this.router.navigateByUrl("/");
            return false;
        }));
    }
}
