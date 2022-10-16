import { registerEnumType } from '@nestjs/graphql';

export enum ItemStatus {
    TODO = "TODO",
    INPROGRESS = "INPROGRESS",
    DONE = "DONE"
}


registerEnumType(ItemStatus, { name: 'ItemStatus', description: undefined })
