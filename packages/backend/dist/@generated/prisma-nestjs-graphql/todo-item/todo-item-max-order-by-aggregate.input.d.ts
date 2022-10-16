import { SortOrder } from '../prisma/sort-order.enum';
export declare class TodoItemMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    body?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
