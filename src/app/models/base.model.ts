import { OptionCriteriaRequest } from "../enums/option-criteria.enum";

export class BasePaginationInputDto {
  maxCountResult: number = 999999;
  skipCount: number = 0;
  sorting: string | undefined;
  listCriterias: BaseCriteriaRequestDto[] = [];
}

export class BaseCriteriaRequestDto {
  property: string | undefined;
  option: OptionCriteriaRequest | undefined;
  value: string | undefined;
}

export interface IBasePaginationOutputDto<TEntity> {
  items: TEntity[];
  totalCount: number;
}

export class BasePaginationOutputDto<TEntity> implements IBasePaginationOutputDto<TEntity> {
  items!: TEntity[];
  totalCount!: number;
}