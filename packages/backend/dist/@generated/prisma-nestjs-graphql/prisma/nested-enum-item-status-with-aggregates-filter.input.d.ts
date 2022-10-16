import { ItemStatus } from './item-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumItemStatusFilter } from './nested-enum-item-status-filter.input';
export declare class NestedEnumItemStatusWithAggregatesFilter {
    equals?: keyof typeof ItemStatus;
    in?: Array<keyof typeof ItemStatus>;
    notIn?: Array<keyof typeof ItemStatus>;
    not?: NestedEnumItemStatusWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumItemStatusFilter;
    _max?: NestedEnumItemStatusFilter;
}
