import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppSidebarComponent } from "./app.sidebar.component";
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { LoginPageGroupActions } from 'src/app/states/login-page/login-page.actions';
import { LayoutService } from './service/app.layout.service';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
    ],
    imports: [
        CommonModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule
    ],
    exports: [     
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent
    ],
    providers: [
        LayoutService
    ]
})
export class AppLayoutModule { 

    constructor(
        private store:Store
    ){
        this.store.dispatch(LoginPageGroupActions.getCurrentUserApiAction());
    }
}
