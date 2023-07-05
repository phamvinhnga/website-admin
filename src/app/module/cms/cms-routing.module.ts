import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsComponent } from './cms.component';
import { PostComponent } from './components/post/post.component';
import { PostEditComponent } from './components/post/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: CmsComponent,
    children: [
      {
        path: 'post/:type',
        component: PostComponent,
      },
      {
        path: 'post/:type/:id',
        component: PostEditComponent
      },
      // {
      //   path: 'specialized',
      //   component: SpecializedComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
