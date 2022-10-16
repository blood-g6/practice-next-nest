import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumItemStatusFilter } from '../prisma/enum-item-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class TodoItemWhereInput {
    AND?: Array<TodoItemWhereInput>;
    OR?: Array<TodoItemWhereInput>;
    NOT?: Array<TodoItemWhereInput>;
    id?: IntFilter;
    body?: StringFilter;
    status?: EnumItemStatusFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
