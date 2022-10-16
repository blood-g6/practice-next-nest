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
exports.EnumItemStatusWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const item_status_enum_1 = require("./item-status.enum");
const nested_enum_item_status_with_aggregates_filter_input_1 = require("./nested-enum-item-status-with-aggregates-filter.input");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_item_status_filter_input_1 = require("./nested-enum-item-status-filter.input");
let EnumItemStatusWithAggregatesFilter = class EnumItemStatusWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => item_status_enum_1.ItemStatus, { nullable: true }),
    __metadata("design:type", Object)
], EnumItemStatusWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [item_status_enum_1.ItemStatus], { nullable: true }),
    __metadata("design:type", Array)
], EnumItemStatusWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [item_status_enum_1.ItemStatus], { nullable: true }),
    __metadata("design:type", Array)
], EnumItemStatusWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_item_status_with_aggregates_filter_input_1.NestedEnumItemStatusWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", nested_enum_item_status_with_aggregates_filter_input_1.NestedEnumItemStatusWithAggregatesFilter)
], EnumItemStatusWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], EnumItemStatusWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_item_status_filter_input_1.NestedEnumItemStatusFilter, { nullable: true }),
    __metadata("design:type", nested_enum_item_status_filter_input_1.NestedEnumItemStatusFilter)
], EnumItemStatusWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_item_status_filter_input_1.NestedEnumItemStatusFilter, { nullable: true }),
    __metadata("design:type", nested_enum_item_status_filter_input_1.NestedEnumItemStatusFilter)
], EnumItemStatusWithAggregatesFilter.prototype, "_max", void 0);
EnumItemStatusWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumItemStatusWithAggregatesFilter);
exports.EnumItemStatusWithAggregatesFilter = EnumItemStatusWithAggregatesFilter;
//# sourceMappingURL=enum-item-status-with-aggregates-filter.input.js.map