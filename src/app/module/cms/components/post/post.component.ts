import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BaseComponent } from 'src/app/module/shared/model/base.component.model';
import { BaseCriteriaRequestDto, BasePaginationInputDto, OptionCriteriaRequest } from 'src/app/module/shared/model/base.model';
import { PostInputDto, PostOutputDto } from 'src/app/module/shared/model/post.model';
import { BaseService } from 'src/app/module/shared/service/base.service';
import { PostService } from 'src/app/module/shared/service/post.service';
import { environment } from 'src/environments/environment';

const _prefix = `${environment.coreServerURL}/api/post`;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})

export class PostComponent extends BaseComponent<PostInputDto, PostOutputDto> implements OnInit {

  typePost:any;
  constructor(
    public override readonly confirmationService:ConfirmationService,
    public override readonly messageService:MessageService,
    public override readonly activatedRoute: ActivatedRoute,
    public override readonly baseService:BaseService<PostInputDto, PostOutputDto>
    ) {
    super(confirmationService, baseService, messageService, activatedRoute);
    this.filterTable = new BasePaginationInputDto();
    this.baseUrl = _prefix;
  }

  ngOnInit() {
    this.typePost = this.activatedRoute.snapshot.params['type'] || undefined;
    this.filterTable.listCriterias = [
      {
        property : 'Title',
        option: OptionCriteriaRequest.StartsWith,
        value: ''
      } as BaseCriteriaRequestDto,
      {
        property : 'Type',
        option: OptionCriteriaRequest.Equals,
        value: this.typePost
      } as BaseCriteriaRequestDto
    ]
    this.getList(this.filterTable);
  }
}
