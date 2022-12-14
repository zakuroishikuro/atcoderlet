// B - Break Number
// https://atcoder.jp/contests/abc068/tasks/abc068_b
// 2022-10-10T05:51:19.217Z

export function main(input: string) {
  return 1 << Math.floor(Math.log2(+input));
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["7", "4"],
    ["32", "32"],
    ["1", "1"],
    ["100", "64"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
