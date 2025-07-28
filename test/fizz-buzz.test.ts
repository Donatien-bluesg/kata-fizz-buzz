import { fizzbuzz } from "../src/fizzbuzz";

describe("fizzbuzz", () => {
  it("should throw an error if no value is given", () => {
    expect(() => fizzbuzz(null)).toThrow("Invalid empty value");
  });
});
