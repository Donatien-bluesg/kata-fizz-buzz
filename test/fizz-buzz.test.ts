import { fizzbuzz } from "../src/fizzbuzz";
import { EmptyValueError } from "../src/errors/empty-value.error";
import { ValueTooLowError } from "../src/errors/valuye-to-low.error";

describe("fizzbuzz", () => {
  it("should throw an error if no value is given", () => {
    expect(() => fizzbuzz(null)).toThrow(EmptyValueError.MESSAGE);
  });

  it("should throw an error when the value is below 1", () => {
    expect(() => fizzbuzz(-5)).toThrow(ValueTooLowError.MESSAGE);
  });

  // all other possible bad inputs

  it("should print all the number from 1 to the value given", () => {
    expect(fizzbuzz(2)).toBe("1 2");
  });

  it("should print Fizz for all numbers multiple of 3", () => {
    expect(fizzbuzz(4)).toBe("1 2 Fizz 4");
  });
});
