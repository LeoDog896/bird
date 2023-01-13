/** A stream is a function that can get and set values. They can be subscribed to */
interface Stream<T> {
  get(): T;
  set(input: T): void;
  subscribers: Subscriber<T>[];
}

type Subscriber<T> = (value: T) => void;

export function stream<T>(initialValue: T): Stream<T>;
export function stream<T>(): Stream<T | undefined>;
export function stream<T>(initialValue?: T): Stream<T | undefined> {
  let value = initialValue;
  const subscribers: Subscriber<T | undefined>[] = []

  return {
    set(input: T) {
      value = input;
      for (const subscriber of subscribers) {
        subscriber(value)
      }
    },
    get() {
      return value;
    },
    subscribers,
  };
}
