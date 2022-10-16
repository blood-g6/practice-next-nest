import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { TodoItem } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Resolver(() => TodoItem)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Mutation(() => TodoItem)
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todosService.create(createTodoInput);
  }

  @Query(() => [TodoItem], { name: 'todos' })
  findAll() {
    return this.todosService.findAll();
  }

  @Query(() => TodoItem, { name: 'todo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todosService.findOne(id);
  }

  @Mutation(() => TodoItem)
  updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    return this.todosService.update(updateTodoInput.id, updateTodoInput);
  }

  @Mutation(() => TodoItem)
  removeTodo(@Args('id', { type: () => Int }) id: number) {
    return this.todosService.remove(id);
  }
}
