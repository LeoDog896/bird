/** A stream is a function that can get and set values. They can be subscribed to */
interface Stream<T> {
  get(): T;
  set(input: T): void;
  subscribers: ((value: T) => void)[];
}

export function stream<T>(initialValue: T): Stream<T>;
export function stream<T>(): Stream<T | undefined>;
export function stream<T>(initialValue?: T): Stream<T | undefined> {
  let value = initialValue;

  return {
    set(input: T) {
      value = input;
    },
    get() {
      return value;
    },
    subscribers: [],
  };
}
