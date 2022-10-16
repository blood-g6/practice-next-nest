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
exports.TodoItemGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const item_status_enum_1 = require("../prisma/item-status.enum");
const todo_item_count_aggregate_output_1 = require("./todo-item-count-aggregate.output");
const todo_item_avg_aggregate_output_1 = require("./todo-item-avg-aggregate.output");
const todo_item_sum_aggregate_output_1 = require("./todo-item-sum-aggregate.output");
const todo_item_min_aggregate_output_1 = require("./todo-item-min-aggregate.output");
const todo_item_max_aggregate_output_1 = require("./todo-item-max-aggregate.output");
let TodoItemGroupBy = class TodoItemGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], TodoItemGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], TodoItemGroupBy.prototype, "body", void 0);
__decorate([
    (0, graphql_1.Field)(() => item_status_enum_1.ItemStatus, { nullable: false }),
    __metadata("design:type", Object)
], TodoItemGroupBy.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], TodoItemGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], TodoItemGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_count_aggregate_output_1.TodoItemCountAggregate, { nullable: true }),
    __metadata("design:type", todo_item_count_aggregate_output_1.TodoItemCountAggregate)
], TodoItemGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_avg_aggregate_output_1.TodoItemAvgAggregate, { nullable: true }),
    __metadata("design:type", todo_item_avg_aggregate_output_1.TodoItemAvgAggregate)
], TodoItemGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_sum_aggregate_output_1.TodoItemSumAggregate, { nullable: true }),
    __metadata("design:type", todo_item_sum_aggregate_output_1.TodoItemSumAggregate)
], TodoItemGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_min_aggregate_output_1.TodoItemMinAggregate, { nullable: true }),
    __metadata("design:type", todo_item_min_aggregate_output_1.TodoItemMinAggregate)
], TodoItemGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => todo_item_max_aggregate_output_1.TodoItemMaxAggregate, { nullable: true }),
    __metadata("design:type", todo_item_max_aggregate_output_1.TodoItemMaxAggregate)
], TodoItemGroupBy.prototype, "_max", void 0);
TodoItemGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], TodoItemGroupBy);
exports.TodoItemGroupBy = TodoItemGroupBy;
//# sourceMappingURL=todo-item-group-by.output.js.map