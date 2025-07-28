export class ValueTooLowError extends Error {
  static MESSAGE = "Invalid value below 1";

  constructor() {
    super(ValueTooLowError.MESSAGE);
  }
}
