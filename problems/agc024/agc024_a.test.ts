// A - Fairness
// https://atcoder.jp/contests/agc024/tasks/agc024_a
// 2022-09-24T11:35:35.301Z

/*
function main(input = "") {
  let [a, b, c, k] = input.split(/\s/).map(Number);

  for (let i = 0; i < k; i++) {
    [a, b, c] = [
      b + c,
      a + c,
      a + b,
    ];
  }

  const answer = a - b;
  return answer < 10 ** 18 ? answer : "Unfair"; //あふれるって
}
*/

// ATCODER入門 P.210参考
export function main(input: string) {
  const [a, b] = input.split(/\s/).map(Number);
  return +input.slice(-1) % 2 == 0 ? a - b : b - a;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["1 2 3 1", "1"],
    ["2 3 2 0", "-1"],
    ["1000000000 1000000000 1000000000 1000000000000000000", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
