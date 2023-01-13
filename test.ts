import * as bird from "./index.ts";

const emptyStream = bird.stream<number>();

const filledStream = bird.stream(5);
