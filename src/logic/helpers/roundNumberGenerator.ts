import { ROUNDS_NR } from "../assets/constants";

export function* roundNumberGenerator(): Generator<number> {
  for (let i = 0; i < ROUNDS_NR; i++) {
    yield i + 1;
  }
}
