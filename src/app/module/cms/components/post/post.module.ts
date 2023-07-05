import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSummernoteModule } from 'ngx-summernote';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CmsRoutingModule } from '../../cms-routing.module';
import { AppLayoutModule } from '../../layout/app.layout.module';
import { DialogService } from 'primeng/dynamicdialog';
import { PostComponent } from './post.component';
import { PostService } from 'src/app/module/shared/service/post.service';
import { PostEditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    PostComponent,
    PostEditComponent
  ],
  imports: [
    ProgressSpinnerModule,
    NgxSummernoteModule,
    FileUploadModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    CmsRoutingModule,
    DialogModule,
    ConfirmDialogModule,
    AppLayoutModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    CheckboxModule
  ],
  providers: [
    DialogService,
    PostService
  ]
})
export class PostModule { }
