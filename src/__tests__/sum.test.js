import { sum } from "../components/sum";

test("Sum of 2 numbers", () => {
  const result = sum(3, 4);

  expect(result).toBe(7);
});
