// B - Kagami Mochi
// https://atcoder.jp/contests/abc085/tasks/abc085_b
// 2022-09-23T10:53:46.585Z

export function main(input: string) {
  const mochi = input.split(/\s/).map(Number).slice(1);
  return new Set(mochi).size;
}

function _main(input = "") {
  const mochi = input.split(/\s/).map(Number).slice(1);
  const bucket = {};
  for (const m of mochi) {
    if (!(m in bucket)) {
      bucket[m] = 0;
    }
    bucket[m]++;
  }
  return Object.entries(bucket).length;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4\n10\n8\n8\n6", "3"],
    ["3\n15\n15\n15", "1"],
    ["7\n50\n30\n50\n100\n50\n80\n30", "4"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
