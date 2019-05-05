import { bar } from "@typegraphql/core";

describe("bar", () => {
  it("should return 'bar'", async () => {
    const result = bar();

    expect(result).toBe("bar");
  });
});
