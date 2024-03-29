import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { LoginPageTypeResolver } from './resolvers/page-type.resolver';
import { RoutingEnum } from './enums/routing.enum';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: RoutingEnum.PostPage,
    loadChildren: () => import('./modules/post/post.module').then((m) => m.PostModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }, // Chuyển hướng về trang chính khi URL không hợp lệ
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
