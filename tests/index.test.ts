import { greet } from "../src/index";

describe("greet function", () => {
  test("should return greeting message", () => {
    const result = greet("TypeScript");
    expect(result).toBe("Hello, TypeScript!");
  });

  test("should handle empty string", () => {
    const result = greet("");
    expect(result).toBe("Hello, !");
  });
});
