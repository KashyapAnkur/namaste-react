import { Sum } from "../components/Sum";

test("Sum function should calculate the sum of two functions", () => {
    const result = Sum(3,4);

    // Assertion
    expect(result).toBe(7);
});