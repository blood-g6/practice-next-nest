import { SortOrder } from '../prisma/sort-order.enum';
import { TodoItemCountOrderByAggregateInput } from './todo-item-count-order-by-aggregate.input';
import { TodoItemAvgOrderByAggregateInput } from './todo-item-avg-order-by-aggregate.input';
import { TodoItemMaxOrderByAggregateInput } from './todo-item-max-order-by-aggregate.input';
import { TodoItemMinOrderByAggregateInput } from './todo-item-min-order-by-aggregate.input';
import { TodoItemSumOrderByAggregateInput } from './todo-item-sum-order-by-aggregate.input';
export declare class TodoItemOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    body?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: TodoItemCountOrderByAggregateInput;
    _avg?: TodoItemAvgOrderByAggregateInput;
    _max?: TodoItemMaxOrderByAggregateInput;
    _min?: TodoItemMinOrderByAggregateInput;
    _sum?: TodoItemSumOrderByAggregateInput;
}
