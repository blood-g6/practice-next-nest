import { TodoItemWhereUniqueInput } from './todo-item-where-unique.input';
import { TodoItemCreateInput } from './todo-item-create.input';
import { TodoItemUpdateInput } from './todo-item-update.input';
export declare class UpsertOneTodoItemArgs {
    where: TodoItemWhereUniqueInput;
    create: TodoItemCreateInput;
    update: TodoItemUpdateInput;
}
