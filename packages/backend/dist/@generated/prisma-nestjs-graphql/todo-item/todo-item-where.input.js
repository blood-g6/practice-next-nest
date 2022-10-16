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
var TodoItemWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_item_status_filter_input_1 = require("../prisma/enum-item-status-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let TodoItemWhereInput = TodoItemWhereInput_1 = class TodoItemWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [TodoItemWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], TodoItemWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [TodoItemWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], TodoItemWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [TodoItemWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], TodoItemWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], TodoItemWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], TodoItemWhereInput.prototype, "body", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_item_status_filter_input_1.EnumItemStatusFilter, { nullable: true }),
    __metadata("design:type", enum_item_status_filter_input_1.EnumItemStatusFilter)
], TodoItemWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], TodoItemWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], TodoItemWhereInput.prototype, "updatedAt", void 0);
TodoItemWhereInput = TodoItemWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], TodoItemWhereInput);
exports.TodoItemWhereInput = TodoItemWhereInput;
//# sourceMappingURL=todo-item-where.input.js.map