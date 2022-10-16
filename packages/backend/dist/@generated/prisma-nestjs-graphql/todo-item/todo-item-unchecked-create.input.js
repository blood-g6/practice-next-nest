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
exports.TodoItemUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const item_status_enum_1 = require("../prisma/item-status.enum");
let TodoItemUncheckedCreateInput = class TodoItemUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], TodoItemUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], TodoItemUncheckedCreateInput.prototype, "body", void 0);
__decorate([
    (0, graphql_1.Field)(() => item_status_enum_1.ItemStatus, { nullable: true }),
    __metadata("design:type", Object)
], TodoItemUncheckedCreateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], TodoItemUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], TodoItemUncheckedCreateInput.prototype, "updatedAt", void 0);
TodoItemUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], TodoItemUncheckedCreateInput);
exports.TodoItemUncheckedCreateInput = TodoItemUncheckedCreateInput;
//# sourceMappingURL=todo-item-unchecked-create.input.js.map