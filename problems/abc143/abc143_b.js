// B - TAKOYAKI FESTIVAL 2019
// https://atcoder.jp/contests/abc143/tasks/abc143_b
// 2022-09-23T13:31:37.035Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const tako = input.split(/\s/).map(Number).slice(1);
  let sum = 0;
  tako.forEach((x, i, a) => {
    a.slice(i + 1).forEach((y) => {
      sum += x * y;
    });
  });
  return sum;
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["3\n3 1 2", "11"],
    ["7\n5 0 7 8 3 3 2", "312"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
