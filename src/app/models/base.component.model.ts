import { SummernoteOptions } from "ngx-summernote/lib/summernote-options";
import * as _ from 'lodash';
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ConfirmationService, MessageService } from "primeng/api";
import { FileDto } from "./file.model";
import { BasePaginationInputDto, BasePaginationOutputDto } from "./base.model";
import { BaseService } from "../services/base.service";

export class BaseComponent<TInputDto, TOutputDto>  {

  public baseUrl!:string;
  public filterTable!:BasePaginationInputDto;
  public dataTable!:BasePaginationOutputDto<TOutputDto>;
  public title:string | undefined;
  public form: FormGroup | undefined;
  public listFileImage:FileDto[] = [];
  public summernoteOptions: SummernoteOptions = {
    placeholder: '',
    tabsize: 2,
    toolbar: [
      ['misc', ['codeview', 'undo', 'redo']],
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
      ['fontsize', ['fontname', 'fontsize', 'color']],
      ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
      ['insert', ['table', 'picture', 'link', 'video', 'hr']]
    ],
    popover: {
      image: [
        ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
        ['float', ['floatLeft', 'floatRight', 'floatNone']],
        ['remove', ['removeMedia']]
      ],
      link: [
        ['link', ['linkDialogShow', 'unlink']]
      ],
      table: [
        ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
        ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
      ],
      air: [
        ['color', ['color']],
        ['font', ['bold', 'underline', 'clear']],
        ['para', ['ul', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture']]
      ]
    }
  };

  public constructor(
    public confirmationService:ConfirmationService,
    public baseService:BaseService<TInputDto, TOutputDto>,
    public messageService:MessageService,
    public activatedRoute: ActivatedRoute
  ){
  }

  public onDelete(id:string) {
    if(!id){
      return;
    }
    this.confirmationService.confirm({
        message: `Bạn có chắc chắn xóa?`,
        header: 'Xóa',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.baseService.delete(this.baseUrl, id).subscribe(() => {
            this.getList(this.filterTable);
            this.messageService.add({severity:'warn', summary: 'Xóa thành công', life: 1000});
          })
        }
    });
  }

  public getList(filterTable:BasePaginationInputDto){
    this.baseService.getList(this.baseUrl, filterTable).subscribe(res => {
      this.dataTable = res;
    })
  }

  public async onHandleUploadImage(event: any): Promise<FileDto[]> {
    if(!this.listFileImage){
      this.listFileImage = [];
    }
    _.each(event?.target?.files, async (file: File) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      await new Promise((resolve, reject) => {
        reader.onload = () => {
          this.listFileImage.push({
            name: file.name,
            type: file.type,
            url: reader.result
          } as FileDto)
        };
      });

    });
    return this.listFileImage;
  }

  public onRemoveFileImage(){
    this.listFileImage = [];
  }
}
