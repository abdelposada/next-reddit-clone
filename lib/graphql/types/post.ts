import { IsString, MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class PostInput {
  @Field()
  @IsString()
  @MaxLength(30)
  public title: string;
}
