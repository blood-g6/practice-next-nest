"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var TodoItemScalarFieldEnum;
(function (TodoItemScalarFieldEnum) {
    TodoItemScalarFieldEnum["id"] = "id";
    TodoItemScalarFieldEnum["body"] = "body";
    TodoItemScalarFieldEnum["status"] = "status";
    TodoItemScalarFieldEnum["createdAt"] = "createdAt";
    TodoItemScalarFieldEnum["updatedAt"] = "updatedAt";
})(TodoItemScalarFieldEnum = exports.TodoItemScalarFieldEnum || (exports.TodoItemScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(TodoItemScalarFieldEnum, { name: 'TodoItemScalarFieldEnum', description: undefined });
//# sourceMappingURL=todo-item-scalar-field.enum.js.map