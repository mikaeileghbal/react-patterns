import { counter } from "./CounterObject";

test("incrementing 1 time should be 1", () => {
  expect(counter.increment()).toBe(1);
});

test("incrementing 2 more times should be 3", () => {
  counter.increment();
  expect(counter.increment()).toBe(3);
});

test("decrementing 1 time should be 2", () => {
  expect(counter.decrement()).toBe(2);
});
