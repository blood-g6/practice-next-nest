import { ItemStatus } from './item-status.enum';
import { NestedEnumItemStatusFilter } from './nested-enum-item-status-filter.input';
export declare class EnumItemStatusFilter {
    equals?: keyof typeof ItemStatus;
    in?: Array<keyof typeof ItemStatus>;
    notIn?: Array<keyof typeof ItemStatus>;
    not?: NestedEnumItemStatusFilter;
}
