import { TodosService } from './todos.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
export declare class TodosResolver {
    private readonly todosService;
    constructor(todosService: TodosService);
    createTodo(createTodoInput: CreateTodoInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateTodo(updateTodoInput: UpdateTodoInput): string;
    removeTodo(id: number): string;
}
