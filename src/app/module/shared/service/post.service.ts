import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PostInputDto, PostOutputDto } from '../model/post.model';
import { BaseService } from './base.service';

const _prefix = `${environment.coreServerURL}/api/post`;

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService<PostInputDto, PostOutputDto> {
  constructor(http: HttpClient) {
    super(http);
  }
}