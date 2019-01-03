"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function createHook(initialState) {
    const modelState = react_1.useState(initialState);
    return {
        get state() {
            return modelState[0];
        },
        setState(newState) {
            modelState[1](newState);
        }
    };
}
exports.default = createHook;
//# sourceMappingURL=index.js.map