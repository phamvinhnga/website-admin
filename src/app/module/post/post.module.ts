import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSummernoteModule } from "ngx-summernote";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { DialogService } from "primeng/dynamicdialog";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { TableModule } from "primeng/table";
import { PostService } from "../shared/service/post.service";
import { PostEditComponent } from "./edit/edit.component";
import { PostComponent } from "./post.component";
import { PostRoutingModule } from "./post-routing.module";
import { ConfirmationService } from "primeng/api";

@NgModule({
  declarations: [
    PostComponent,
    PostEditComponent
  ],
  imports: [
    PostRoutingModule,
    ProgressSpinnerModule,
    NgxSummernoteModule,
    FileUploadModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
  ],
  providers: [
    DialogService,
    PostService,
    ConfirmationService,
  ]
})
export class PostModule { }
