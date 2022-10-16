import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ItemStatus } from '../../../@generated/prisma-nestjs-graphql/prisma/item-status.enum';

@ObjectType()
export class TodoItem {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  body!: string;

  @Field(() => ItemStatus, { nullable: false, defaultValue: 'TODO' })
  status!: keyof typeof ItemStatus;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
