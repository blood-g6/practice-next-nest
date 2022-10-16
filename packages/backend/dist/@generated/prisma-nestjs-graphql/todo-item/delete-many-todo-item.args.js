"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTodoItemArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const todo_item_where_input_1 = require("./todo-item-where.input");
const class_transformer_1 = require("class-transformer");
let DeleteManyTodoItemArgs = class DeleteManyTodoItemArgs {
};
__decorate([
    (0, graphql_1.Field)(() => todo_item_where_input_1.TodoItemWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => todo_item_where_input_1.TodoItemWhereInput),
    __metadata("design:type", todo_item_where_input_1.TodoItemWhereInput)
], DeleteManyTodoItemArgs.prototype, "where", void 0);
DeleteManyTodoItemArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteManyTodoItemArgs);
exports.DeleteManyTodoItemArgs = DeleteManyTodoItemArgs;
//# sourceMappingURL=delete-many-todo-item.args.js.map