import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OptionCriteriaRequest } from 'src/app/enums/option-criteria.enum';
import { RoutingEnum } from 'src/app/enums/routing.enum';
import { BaseComponent } from 'src/app/models/base.component.model';
import { BasePaginationInputDto, BaseCriteriaRequestDto } from 'src/app/models/base.model';
import { PostInputDto, PostOutputDto } from 'src/app/models/post.model';
import { BaseService } from 'src/app/services/base.service';
import { PostService } from 'src/app/services/post.service';
import { environment } from 'src/environments/environment';

const _prefix = `${environment.coreServerURL}/api/post`;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})

export class PostComponent extends BaseComponent<PostInputDto, PostOutputDto> implements OnInit {

  routingEnum = RoutingEnum;
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
    this.typePost = this.activatedRoute.snapshot.params['postType'] || undefined;
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
