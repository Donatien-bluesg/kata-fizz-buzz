export class Transform {
  constructor(
    readonly value: number,
    readonly display: string,
  ) {}

  match(value: number): boolean {
    return value % this.value === 0;
  }
}
