import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemStatus } from './item-status.enum';

@InputType()
export class EnumItemStatusFieldUpdateOperationsInput {

    @Field(() => ItemStatus, {nullable:true})
    set?: keyof typeof ItemStatus;
}
