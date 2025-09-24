"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe("greet function", () => {
    test("should return greeting message", () => {
        const result = (0, index_1.greet)("TypeScript");
        expect(result).toBe("Hello, TypeScript!");
    });
    test("should handle empty string", () => {
        const result = (0, index_1.greet)("");
        expect(result).toBe("Hello, !");
    });
});
//# sourceMappingURL=index.test.js.map