import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumItemStatusFilter } from '../prisma/enum-item-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TodoItemWhereInput {

    @Field(() => [TodoItemWhereInput], {nullable:true})
    AND?: Array<TodoItemWhereInput>;

    @Field(() => [TodoItemWhereInput], {nullable:true})
    OR?: Array<TodoItemWhereInput>;

    @Field(() => [TodoItemWhereInput], {nullable:true})
    NOT?: Array<TodoItemWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    body?: StringFilter;

    @Field(() => EnumItemStatusFilter, {nullable:true})
    status?: EnumItemStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
