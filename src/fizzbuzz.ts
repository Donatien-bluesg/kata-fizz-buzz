import { EmptyValueError } from "./errors/empty-value.error";
import { ValueTooLowError } from "./errors/valuye-to-low.error";
import { Transform } from "./transform";

const SERIES_START = 1;

const transforms: Transform[] = [
  new Transform(15, "FizzBuzz"),
  new Transform(3, "Fizz"),
  new Transform(5, "Buzz"),
];

export function fizzbuzz(value: number): string {
  if (!value) throw new EmptyValueError();
  if (value < SERIES_START) throw new ValueTooLowError();

  let result = "";

  for (let i = SERIES_START; i <= value; i++) {
    if (i > SERIES_START) result += " ";

    result += transforms.find((t) => t.match(i))?.display || i.toString();
  }

  return result;
}
