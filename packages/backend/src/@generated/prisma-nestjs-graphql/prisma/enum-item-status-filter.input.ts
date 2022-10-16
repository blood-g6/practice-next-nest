import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemStatus } from './item-status.enum';
import { NestedEnumItemStatusFilter } from './nested-enum-item-status-filter.input';

@InputType()
export class EnumItemStatusFilter {

    @Field(() => ItemStatus, {nullable:true})
    equals?: keyof typeof ItemStatus;

    @Field(() => [ItemStatus], {nullable:true})
    in?: Array<keyof typeof ItemStatus>;

    @Field(() => [ItemStatus], {nullable:true})
    notIn?: Array<keyof typeof ItemStatus>;

    @Field(() => NestedEnumItemStatusFilter, {nullable:true})
    not?: NestedEnumItemStatusFilter;
}
