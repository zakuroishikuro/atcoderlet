// B - Power Socket
// https://atcoder.jp/contests/abc139/tasks/abc139_b
// 2022-10-09T12:26:48.967Z

export function main(input: string) {
  const [A, B] = input.split(/\s/).map(Number);
  return Math.ceil((B - 1) / (A - 1));
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 10", "3"],
    ["8 9", "2"],
    ["8 8", "1"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
