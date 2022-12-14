// subject: A - Multiplication 1
// url: https://atcoder.jp/contests/abc169/tasks/abc169_a
// timestamp: 2022-09-21T14:00:46.567Z

export function main(input: string) {
  const [A, B] = input.split(/\s/).map(Number);
  return A * B;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2 5", "10"],
    ["100 100", "10000"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
