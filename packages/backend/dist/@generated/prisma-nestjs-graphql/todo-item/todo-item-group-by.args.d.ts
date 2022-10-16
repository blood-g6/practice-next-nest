import { TodoItemWhereInput } from './todo-item-where.input';
import { TodoItemOrderByWithAggregationInput } from './todo-item-order-by-with-aggregation.input';
import { TodoItemScalarFieldEnum } from './todo-item-scalar-field.enum';
import { TodoItemScalarWhereWithAggregatesInput } from './todo-item-scalar-where-with-aggregates.input';
import { TodoItemCountAggregateInput } from './todo-item-count-aggregate.input';
import { TodoItemAvgAggregateInput } from './todo-item-avg-aggregate.input';
import { TodoItemSumAggregateInput } from './todo-item-sum-aggregate.input';
import { TodoItemMinAggregateInput } from './todo-item-min-aggregate.input';
import { TodoItemMaxAggregateInput } from './todo-item-max-aggregate.input';
export declare class TodoItemGroupByArgs {
    where?: TodoItemWhereInput;
    orderBy?: Array<TodoItemOrderByWithAggregationInput>;
    by: Array<keyof typeof TodoItemScalarFieldEnum>;
    having?: TodoItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TodoItemCountAggregateInput;
    _avg?: TodoItemAvgAggregateInput;
    _sum?: TodoItemSumAggregateInput;
    _min?: TodoItemMinAggregateInput;
    _max?: TodoItemMaxAggregateInput;
}
