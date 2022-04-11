import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column({ type: 'text' })
  title!: string;

  @Field()
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP()' })
  createdAt: Date = new Date();

  @Field()
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP()', onUpdate: 'CURRENT_TIMESTAMP()' })
  updatedAt: Date;
}
