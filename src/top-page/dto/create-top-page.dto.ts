import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class HhData {
  @IsNumber()
  @Min(0)
  count: number;

  @IsNumber()
  @Min(0)
  juniorSalary: number;

  @IsNumber()
  @Min(0)
  middleSalary: number;

  @IsNumber()
  @Min(0)
  seniorSalary: number;
}

class TopPageAdvantage {
  @IsString()
  title: string;

  @IsString()
  description: string;
}

export class CreateTopPageDto {
  @IsEnum(TopLevelCategory)
  firstCategory: TopLevelCategory;

  @IsString()
  secondCategory: string;

  @IsString()
  title: string;

  @IsString()
  alias: string;

  @IsString()
  category: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => HhData)
  hh?: HhData;

  @ValidateNested()
  @Type(() => TopPageAdvantage)
  advantages: TopPageAdvantage[];

  @IsString()
  seoText: string;

  @IsString()
  tagsTitle: string;

  @IsString({ each: true })
  tags: string[];
}
