import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemStatus } from './item-status.enum';

@InputType()
export class NestedEnumItemStatusFilter {

    @Field(() => ItemStatus, {nullable:true})
    equals?: keyof typeof ItemStatus;

    @Field(() => [ItemStatus], {nullable:true})
    in?: Array<keyof typeof ItemStatus>;

    @Field(() => [ItemStatus], {nullable:true})
    notIn?: Array<keyof typeof ItemStatus>;

    @Field(() => NestedEnumItemStatusFilter, {nullable:true})
    not?: NestedEnumItemStatusFilter;
}
