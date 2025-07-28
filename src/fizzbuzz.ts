import { EmptyValueError } from "./errors/empty-value.error";

export function fizzbuzz(n: number): string {
  throw new EmptyValueError();
}
