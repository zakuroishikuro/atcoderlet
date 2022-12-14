// A51 - Stack
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_ay
// 2022-10-31T12:46:07.501Z

export function main(input: string) {
  const ans = [];

  const stack = [];
  for (const line of input.split(/\n/).slice(1)) {
    const [q, name] = line.split(/\s/);
    if (q == "1") {
      stack.push(name);
    } else if (q == "2") {
      const name = stack[stack.length - 1];
      ans.push(name);
    } else if (q == "3") {
      stack.pop();
    }
  }
  return ans.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["5\n1 futuremap\n1 howtospeak\n2\n3\n2", "howtospeak\nfuturemap"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
