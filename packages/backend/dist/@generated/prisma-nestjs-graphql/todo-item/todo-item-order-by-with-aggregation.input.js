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
exports.TodoItemOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const todo_item_count_order_by_aggregate_input_1 = require("./todo-item-count-order-by-aggregate.input");
const todo_item_avg_order_by_aggregate_input_1 = require("./todo-item-avg-order-by-aggregate.input");
const todo_item_max_order_by_aggregate_input_1 = require("./todo-item-max-order-by-aggregate.input");
const todo_item_min_order_by_aggregate_input_1 = require("./todo-item-min-order-by-aggregate.input");
const todo_item_sum_order_by_aggregate_input_1 = require("./todo-item-sum-order-by-aggregate.input");
let TodoItemOrderByWithAggregationInput = class TodoItemOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], TodoItemOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], TodoItemOrderByWithAggregationInput.prototype, "body", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], TodoItemOrderByWithAggregationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], TodoItemOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], TodoItemOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_count_order_by_aggregate_input_1.TodoItemCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", todo_item_count_order_by_aggregate_input_1.TodoItemCountOrderByAggregateInput)
], TodoItemOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_avg_order_by_aggregate_input_1.TodoItemAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", todo_item_avg_order_by_aggregate_input_1.TodoItemAvgOrderByAggregateInput)
], TodoItemOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_max_order_by_aggregate_input_1.TodoItemMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", todo_item_max_order_by_aggregate_input_1.TodoItemMaxOrderByAggregateInput)
], TodoItemOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_min_order_by_aggregate_input_1.TodoItemMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", todo_item_min_order_by_aggregate_input_1.TodoItemMinOrderByAggregateInput)
], TodoItemOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_sum_order_by_aggregate_input_1.TodoItemSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", todo_item_sum_order_by_aggregate_input_1.TodoItemSumOrderByAggregateInput)
], TodoItemOrderByWithAggregationInput.prototype, "_sum", void 0);
TodoItemOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], TodoItemOrderByWithAggregationInput);
exports.TodoItemOrderByWithAggregationInput = TodoItemOrderByWithAggregationInput;
//# sourceMappingURL=todo-item-order-by-with-aggregation.input.js.map