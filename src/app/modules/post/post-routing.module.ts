import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { RoutingEnum } from 'src/app/enums/routing.enum';

const routes: Routes = [
  {
    path: RoutingEnum.VeChungToiPostPage,
    component: PostComponent,
    data: {
      postType: 've-chung-toi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
