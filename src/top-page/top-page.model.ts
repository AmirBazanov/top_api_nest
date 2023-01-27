import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products
}


export class HhData{
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;
}

export const HhDataSchema = SchemaFactory.createForClass(HhData);

export class TopPageAdvantage{
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const TopPageAdvantageSchema = SchemaFactory.createForClass(TopPageAdvantage);

@Schema({_id: true, timestamps: true})
export class TopPageModel{
  @Prop({enum: TopLevelCategory})
  firstCategory: TopLevelCategory;

  @Prop()
  secondCategory: string;

  @Prop()
  title: string;

  @Prop()
  alias: string;

  @Prop()
  category: string;

  @Prop({type: HhDataSchema})
  hh?: HhData;

  @Prop({type: [TopPageAdvantageSchema]})
  advantages: TopPageAdvantage[];

  @Prop()
  seoText: string;

  @Prop()
  tagsTitle: string;

  @Prop({type: [String]})
  tags: string[];
}

export const TopPageModelSchema = SchemaFactory.createForClass(TopPageModel);