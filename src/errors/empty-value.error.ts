export class EmptyValueError extends Error {
  static MESSAGE: string = "Invalid empty value";

  constructor() {
    super(EmptyValueError.MESSAGE);
  }
}
