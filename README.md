# atcoder-js

# install

```sh
pnpm i
```

AtCoderのJavaScriptはNode.js v12.1.6なので、一応12で動くようにした。

`pnpm env use --global v12`すればバージョンを合わせることができる
ただ、文法的にはv18と主な違いはないのでわざわざバージョンを合わせなくていいかも
気になるのは以下が使えないことぐらい
- `Array#at`
- `??`
- `?.`
- `??=`

# usage

```sh
pnpm new abc269
```

該当コンテストのファイルを全てダウンロードする
全部はいらないと思うし問題ごとにダウンロードできるようにする予定

```sh
pnpm test
```

`jest --watchでproblems`フォルダをテスト
ファイル自体にテストを書いてる
AtCoderにそのまま貼ってOK

# 使ってるライブラリのバージョン古くね？

node v12はサポート終了済みで切り捨てられまくってるのでv12で使える最新を指定してるはず