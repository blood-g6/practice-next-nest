import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumItemStatusWithAggregatesFilter } from '../prisma/enum-item-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TodoItemScalarWhereWithAggregatesInput {

    @Field(() => [TodoItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TodoItemScalarWhereWithAggregatesInput>;

    @Field(() => [TodoItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TodoItemScalarWhereWithAggregatesInput>;

    @Field(() => [TodoItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TodoItemScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    body?: StringWithAggregatesFilter;

    @Field(() => EnumItemStatusWithAggregatesFilter, {nullable:true})
    status?: EnumItemStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
