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
exports.TodoItemGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const todo_item_where_input_1 = require("./todo-item-where.input");
const class_transformer_1 = require("class-transformer");
const todo_item_order_by_with_aggregation_input_1 = require("./todo-item-order-by-with-aggregation.input");
const todo_item_scalar_field_enum_1 = require("./todo-item-scalar-field.enum");
const todo_item_scalar_where_with_aggregates_input_1 = require("./todo-item-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const todo_item_count_aggregate_input_1 = require("./todo-item-count-aggregate.input");
const todo_item_avg_aggregate_input_1 = require("./todo-item-avg-aggregate.input");
const todo_item_sum_aggregate_input_1 = require("./todo-item-sum-aggregate.input");
const todo_item_min_aggregate_input_1 = require("./todo-item-min-aggregate.input");
const todo_item_max_aggregate_input_1 = require("./todo-item-max-aggregate.input");
let TodoItemGroupByArgs = class TodoItemGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => todo_item_where_input_1.TodoItemWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => todo_item_where_input_1.TodoItemWhereInput),
    __metadata("design:type", todo_item_where_input_1.TodoItemWhereInput)
], TodoItemGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [todo_item_order_by_with_aggregation_input_1.TodoItemOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], TodoItemGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [todo_item_scalar_field_enum_1.TodoItemScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], TodoItemGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_scalar_where_with_aggregates_input_1.TodoItemScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", todo_item_scalar_where_with_aggregates_input_1.TodoItemScalarWhereWithAggregatesInput)
], TodoItemGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], TodoItemGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], TodoItemGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_count_aggregate_input_1.TodoItemCountAggregateInput, { nullable: true }),
    __metadata("design:type", todo_item_count_aggregate_input_1.TodoItemCountAggregateInput)
], TodoItemGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_avg_aggregate_input_1.TodoItemAvgAggregateInput, { nullable: true }),
    __metadata("design:type", todo_item_avg_aggregate_input_1.TodoItemAvgAggregateInput)
], TodoItemGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_sum_aggregate_input_1.TodoItemSumAggregateInput, { nullable: true }),
    __metadata("design:type", todo_item_sum_aggregate_input_1.TodoItemSumAggregateInput)
], TodoItemGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_min_aggregate_input_1.TodoItemMinAggregateInput, { nullable: true }),
    __metadata("design:type", todo_item_min_aggregate_input_1.TodoItemMinAggregateInput)
], TodoItemGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_max_aggregate_input_1.TodoItemMaxAggregateInput, { nullable: true }),
    __metadata("design:type", todo_item_max_aggregate_input_1.TodoItemMaxAggregateInput)
], TodoItemGroupByArgs.prototype, "_max", void 0);
TodoItemGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], TodoItemGroupByArgs);
exports.TodoItemGroupByArgs = TodoItemGroupByArgs;
//# sourceMappingURL=todo-item-group-by.args.js.map