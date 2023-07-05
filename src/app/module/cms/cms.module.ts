import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLayoutModule } from './layout/app.layout.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ManagerAboutUsComponent } from './components/about-us/about-us.component';
import { ManagerFooterComponent } from './components/footer/footer.component';
import { ManagerHeaderComponent } from './components/header/header.component';
import { AccountComponent } from './components/account/account.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { FileUploadModule} from 'primeng/fileupload'; 
import { NgxSummernoteModule } from 'ngx-summernote';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PostModule } from './components/post/post.module';

@NgModule({
  declarations: [
    CmsComponent,
    ManagerAboutUsComponent,
    ManagerFooterComponent,
    ManagerHeaderComponent,
    AccountComponent,
    AccountInfoComponent,
  ],
  imports: [
    PostModule,
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
    ToastModule
  ],
  providers:[
    ConfirmationService,
    MessageService,
  ],
})
export class CmsModule { }
