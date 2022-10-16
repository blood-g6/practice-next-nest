import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemStatus } from '../prisma/item-status.enum';

@InputType()
export class TodoItemCreateInput {

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => ItemStatus, {nullable:true})
    status?: keyof typeof ItemStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
