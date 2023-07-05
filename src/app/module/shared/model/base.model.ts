export class BasePaginationInputDto {
    maxCountResult: number = 999999;
    skipCount: number = 0;
    sorting: string | undefined;
    listCriterias: BaseCriteriaRequestDto[] | undefined;
  }
  
  export class BaseCriteriaRequestDto {
    property: string | undefined;
    option: OptionCriteriaRequest | undefined;
    value: string | undefined;
  }
  
  export enum OptionCriteriaRequest {
    Equals,
    NotEquals,
    Contains,
    StartsWith,
  }
  