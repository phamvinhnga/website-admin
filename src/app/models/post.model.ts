import { FileImageDto } from "./file.model";

export interface IPostInputDto {
  id?: number;
  title?: string;
  type?: string;
  content?: string;
  summary?: string;
  permalink?: string;
  metaTitle?: string;
  metaDescription?: string;
  thumbnail?: FileImageDto;
  [key: string]: any;
}

export class PostInputDto implements IPostInputDto {
  id?: number;
  title?: string;
  type?: string;
  content?: string;
  summary?: string;
  permalink?: string;
  metaTitle?: string;
  metaDescription?: string;
  thumbnail?: FileImageDto;
  [key: string]: any;

  constructor(data?: any) {
    this.init(data);
  }
  
  init(data?: any): void {
    if (data) {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this[key] = data[key];
        }
      }
      this.thumbnail = data.thumbnail ? FileImageDto.fromJS(data.thumbnail) : undefined;
    }
  }

  static fromJS(data: object): PostInputDto {
    data = typeof data === 'object' && data !== null ? data : {};
    const result = new PostInputDto();
    result.init(data);
    return result;
  }
}


export interface IPostOutputDto {
  id?: number;
  title?: string;
  type?: string;
  content?: string;
  summary?: string;
  thumbnail?: FileImageDto;
  createDate?: Date;
  permalink?: string;
  metaTitle?: string;
  metaDescription?: string;
  createUser?: number;
  [key: string]: any;
}

export class PostOutputDto implements IPostOutputDto {
  id?: number;
  title?: string;
  type?: string;
  content?: string;
  summary?: string;
  thumbnail?: FileImageDto;
  createDate?: Date;
  permalink?: string;
  metaTitle?: string;
  metaDescription?: string;
  createUser?: number;
  [key: string]: any;

  init(data?: any): void {
    if (data) {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this[key] = data[key];
        }
      }
      this.thumbnail = data.thumbnail ? FileImageDto.fromJS(data.thumbnail) : undefined;
    }
  }

  static fromJS(data: object): PostOutputDto {
    data = typeof data === 'object' && data !== null ? data : {};
    const result = new PostOutputDto();
    result.init(data);
    return result;
  }
}
