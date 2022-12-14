// A - B +/- A
// https://atcoder.jp/contests/abc118/tasks/abc118_a
// 2022-10-10T13:40:13.906Z

export function main(input: string) {
  const [A, B] = input.split(/\s/).map(Number);
  return B % A ? B - A : A + B;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 12", "16"],
    ["8 20", "12"],
    ["1 1", "2"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
