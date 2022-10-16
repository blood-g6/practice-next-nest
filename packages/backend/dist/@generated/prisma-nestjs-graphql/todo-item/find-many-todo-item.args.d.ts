import { TodoItemWhereInput } from './todo-item-where.input';
import { TodoItemOrderByWithRelationInput } from './todo-item-order-by-with-relation.input';
import { TodoItemWhereUniqueInput } from './todo-item-where-unique.input';
import { TodoItemScalarFieldEnum } from './todo-item-scalar-field.enum';
export declare class FindManyTodoItemArgs {
    where?: TodoItemWhereInput;
    orderBy?: Array<TodoItemOrderByWithRelationInput>;
    cursor?: TodoItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof TodoItemScalarFieldEnum>;
}
