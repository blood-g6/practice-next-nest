import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemStatus } from './item-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumItemStatusFilter } from './nested-enum-item-status-filter.input';

@InputType()
export class NestedEnumItemStatusWithAggregatesFilter {

    @Field(() => ItemStatus, {nullable:true})
    equals?: keyof typeof ItemStatus;

    @Field(() => [ItemStatus], {nullable:true})
    in?: Array<keyof typeof ItemStatus>;

    @Field(() => [ItemStatus], {nullable:true})
    notIn?: Array<keyof typeof ItemStatus>;

    @Field(() => NestedEnumItemStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumItemStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumItemStatusFilter, {nullable:true})
    _min?: NestedEnumItemStatusFilter;

    @Field(() => NestedEnumItemStatusFilter, {nullable:true})
    _max?: NestedEnumItemStatusFilter;
}
