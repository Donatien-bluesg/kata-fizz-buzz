import { fizzbuzz } from "../src/fizzbuzz";
import { EmptyValueError } from "../src/errors/empty-value.error";

describe("fizzbuzz", () => {
  it("should throw an error if no value is given", () => {
    expect(() => fizzbuzz(null)).toThrow(EmptyValueError.MESSAGE);
  });
});
