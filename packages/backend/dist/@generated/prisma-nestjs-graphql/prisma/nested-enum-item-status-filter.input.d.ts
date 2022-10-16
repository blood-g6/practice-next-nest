import { ItemStatus } from './item-status.enum';
export declare class NestedEnumItemStatusFilter {
    equals?: keyof typeof ItemStatus;
    in?: Array<keyof typeof ItemStatus>;
    notIn?: Array<keyof typeof ItemStatus>;
    not?: NestedEnumItemStatusFilter;
}
