import { EmptyValueError } from "./errors/empty-value.error";
import { ValueTooLowError } from "./errors/valuye-to-low.error";

export function fizzbuzz(value: number): string {
  if (!value) throw new EmptyValueError();
  if (value < 1) throw new ValueTooLowError();

  let result = "";

  for (let i = 1; i <= value; i++) {
    if (i > 1) result += " ";
    if (i % 3 === 0) result += "Fizz";
    else result += i.toString();
  }

  return result;
}
