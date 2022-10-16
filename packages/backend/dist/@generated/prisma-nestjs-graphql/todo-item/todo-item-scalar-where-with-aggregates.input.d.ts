import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumItemStatusWithAggregatesFilter } from '../prisma/enum-item-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class TodoItemScalarWhereWithAggregatesInput {
    AND?: Array<TodoItemScalarWhereWithAggregatesInput>;
    OR?: Array<TodoItemScalarWhereWithAggregatesInput>;
    NOT?: Array<TodoItemScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    body?: StringWithAggregatesFilter;
    status?: EnumItemStatusWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
