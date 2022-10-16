"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
var ItemStatus;
(function (ItemStatus) {
    ItemStatus["TODO"] = "TODO";
    ItemStatus["INPROGRESS"] = "INPROGRESS";
    ItemStatus["DONE"] = "DONE";
})(ItemStatus = exports.ItemStatus || (exports.ItemStatus = {}));
(0, graphql_1.registerEnumType)(ItemStatus, { name: 'ItemStatus', description: undefined });
//# sourceMappingURL=item-status.enum.js.map