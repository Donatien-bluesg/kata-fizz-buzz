import { EmptyValueError } from "./errors/empty-value.error";
import { ValueTooLowError } from "./errors/valuye-to-low.error";

const SERIES_START = 1;

const FIZZ_NUMBER = 3;
const FIZZ_NAME = "Fizz";

export function fizzbuzz(value: number): string {
  if (!value) throw new EmptyValueError();
  if (value < SERIES_START) throw new ValueTooLowError();

  let result = "";

  for (let i = SERIES_START; i <= value; i++) {
    if (i > SERIES_START) result += " ";

    if (i % FIZZ_NUMBER === 0) result += FIZZ_NAME;
    else result += i.toString();
  }

  return result;
}
