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
exports.AggregateTodoItem = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const todo_item_count_aggregate_output_1 = require("./todo-item-count-aggregate.output");
const todo_item_avg_aggregate_output_1 = require("./todo-item-avg-aggregate.output");
const todo_item_sum_aggregate_output_1 = require("./todo-item-sum-aggregate.output");
const todo_item_min_aggregate_output_1 = require("./todo-item-min-aggregate.output");
const todo_item_max_aggregate_output_1 = require("./todo-item-max-aggregate.output");
let AggregateTodoItem = class AggregateTodoItem {
};
__decorate([
    (0, graphql_1.Field)(() => todo_item_count_aggregate_output_1.TodoItemCountAggregate, { nullable: true }),
    __metadata("design:type", todo_item_count_aggregate_output_1.TodoItemCountAggregate)
], AggregateTodoItem.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_avg_aggregate_output_1.TodoItemAvgAggregate, { nullable: true }),
    __metadata("design:type", todo_item_avg_aggregate_output_1.TodoItemAvgAggregate)
], AggregateTodoItem.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_sum_aggregate_output_1.TodoItemSumAggregate, { nullable: true }),
    __metadata("design:type", todo_item_sum_aggregate_output_1.TodoItemSumAggregate)
], AggregateTodoItem.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_min_aggregate_output_1.TodoItemMinAggregate, { nullable: true }),
    __metadata("design:type", todo_item_min_aggregate_output_1.TodoItemMinAggregate)
], AggregateTodoItem.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_max_aggregate_output_1.TodoItemMaxAggregate, { nullable: true }),
    __metadata("design:type", todo_item_max_aggregate_output_1.TodoItemMaxAggregate)
], AggregateTodoItem.prototype, "_max", void 0);
AggregateTodoItem = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateTodoItem);
exports.AggregateTodoItem = AggregateTodoItem;
//# sourceMappingURL=aggregate-todo-item.output.js.map