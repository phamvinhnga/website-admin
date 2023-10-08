import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConvertViToEn } from 'src/app/module/shared/common/function';
import { BaseComponent } from 'src/app/module/shared/model/base.component.model';
import { BasePaginationInputDto } from 'src/app/module/shared/model/base.model';
import { FileDto } from 'src/app/module/shared/model/file.model';
import { PostInputDto, PostOutputDto } from 'src/app/module/shared/model/post.model';
import { BaseService } from 'src/app/module/shared/service/base.service';
import { environment } from 'src/environments/environment';
const _websiteURL = `${environment.websiteURL}`;
const _prefix = `${environment.coreServerURL}/api/post`;

@Component({
  selector: 'app-post-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class PostEditComponent extends BaseComponent<PostInputDto, PostOutputDto>  implements OnInit {

  typePost:any;
  displayBasic = false;
  permalinkRoot:string = `${_websiteURL}/`;

  constructor(
    private router:Router,
    public override readonly confirmationService:ConfirmationService,
    public override readonly messageService:MessageService,
    public override readonly activatedRoute: ActivatedRoute,
    public override readonly baseService:BaseService<PostInputDto, PostOutputDto>
    ) {
    super(confirmationService, baseService, messageService, activatedRoute);
    this.filterTable = new BasePaginationInputDto();
    this.baseUrl = _prefix;
    this.summernoteOptions.height = 300;
  }
  

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params['id'] || 0);
    this.typePost = this.activatedRoute.snapshot.params['type'] || undefined;
    if(this.typePost){
      this.permalinkRoot += `${this.typePost}/`;
    }
    this.getById(id);
  }

  get thumbnail() : FileDto | undefined{
    if(!this.form || !this.form.controls['thumbnail'].value){
      return undefined;
    }
    return this.form.controls['thumbnail'].value;
  }

  formValidation(key:string) : boolean{
    if(!this.form || !this.form.controls[key]){
      return false;
    }
    return this.form.controls[key].errors && this.form.controls[key].touched ? true : false;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  onSave(){
    if(this.form?.invalid){
      return;
    }
    const input = PostOutputDto.fromJS(this.form?.value);
    input.thumbnail = this.listFileImage.length > 0 ? this.listFileImage[0] : undefined;
    const $api = input.id == 0 ? this.baseService.post(this.baseUrl, input) : this.baseService.put(this.baseUrl, input?.id?.toString() || '0', input);
    return $api.subscribe(res => {
      this.messageService.add({severity:'success', summary: 'Lưu thành công', life: 1000});
      this.router.navigateByUrl('cms/post/' + this.typePost);
    });
  }

  onChangeTitle($event:any){
    const title = this.form?.get('title')?.value;
    this.form?.get('permalink')?.setValue(this.permalinkRoot + ConvertViToEn(title));
  }
  onChangePermalink($event:any){
    const permalink = this.form?.get('permalink')?.value;
    this.form?.get('permalink')?.setValue(this.permalinkRoot + ConvertViToEn(permalink));
  }

  private getById(id:number){
    if(id != 0){
      this.title = 'Sửa bài viết';
      this.baseService.get(this.baseUrl, id.toString()).subscribe(res => {
        this.buildForm(res);
      })
    }
    else{
      this.title = 'Thêm bài viết';
      this.buildForm();
    }
  }

  private buildForm(data?:PostOutputDto | undefined){
    this.form = new FormGroup({
      id: new FormControl(data ? data.id : 0, Validators.required),
      title: new FormControl(data ? data.title : null, Validators.required),
      type: new FormControl(data ? data.type : this.typePost, Validators.required),
      content: new FormControl(data ? data.content : null),
      permalink: new FormControl(data ? data.permalink : null, Validators.required),
      metaTitle: new FormControl(data ? data.metaTitle : this.permalinkRoot),
      metaDescription: new FormControl(data ? data.metaDescription : null)
    });
    if(data?.thumbnail){
      this.listFileImage.push(data.thumbnail);
    }
  }
}
