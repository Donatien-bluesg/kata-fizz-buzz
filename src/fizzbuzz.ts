import { EmptyValueError } from "./errors/empty-value.error";
import { ValueTooLowError } from "./errors/valuye-to-low.error";
import { Transform } from "./transform";

const SERIES_START = 1;

const transforms = [new Transform(3, "Fizz"), new Transform(5, "Buzz")];

export function fizzbuzz(value: number): string {
  if (!value) throw new EmptyValueError();
  if (value < SERIES_START) throw new ValueTooLowError();

  let result = "";

  for (let i = SERIES_START; i <= value; i++) {
    if (i > SERIES_START) result += " ";

    const display = transforms.find((t) => i % t.value === 0)?.display;

    result += display || i.toString();
  }

  return result;
}
