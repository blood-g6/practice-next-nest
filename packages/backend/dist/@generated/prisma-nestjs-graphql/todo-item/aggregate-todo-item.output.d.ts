import { TodoItemCountAggregate } from './todo-item-count-aggregate.output';
import { TodoItemAvgAggregate } from './todo-item-avg-aggregate.output';
import { TodoItemSumAggregate } from './todo-item-sum-aggregate.output';
import { TodoItemMinAggregate } from './todo-item-min-aggregate.output';
import { TodoItemMaxAggregate } from './todo-item-max-aggregate.output';
export declare class AggregateTodoItem {
    _count?: TodoItemCountAggregate;
    _avg?: TodoItemAvgAggregate;
    _sum?: TodoItemSumAggregate;
    _min?: TodoItemMinAggregate;
    _max?: TodoItemMaxAggregate;
}
