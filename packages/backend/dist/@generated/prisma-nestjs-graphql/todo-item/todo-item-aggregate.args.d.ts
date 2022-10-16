import { TodoItemWhereInput } from './todo-item-where.input';
import { TodoItemOrderByWithRelationInput } from './todo-item-order-by-with-relation.input';
import { TodoItemWhereUniqueInput } from './todo-item-where-unique.input';
import { TodoItemCountAggregateInput } from './todo-item-count-aggregate.input';
import { TodoItemAvgAggregateInput } from './todo-item-avg-aggregate.input';
import { TodoItemSumAggregateInput } from './todo-item-sum-aggregate.input';
import { TodoItemMinAggregateInput } from './todo-item-min-aggregate.input';
import { TodoItemMaxAggregateInput } from './todo-item-max-aggregate.input';
export declare class TodoItemAggregateArgs {
    where?: TodoItemWhereInput;
    orderBy?: Array<TodoItemOrderByWithRelationInput>;
    cursor?: TodoItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: TodoItemCountAggregateInput;
    _avg?: TodoItemAvgAggregateInput;
    _sum?: TodoItemSumAggregateInput;
    _min?: TodoItemMinAggregateInput;
    _max?: TodoItemMaxAggregateInput;
}
