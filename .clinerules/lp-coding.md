## LP コーディングガイドライン

- スタイリングは Tailwind クラスを使用する
- テキストに関するスタイルは、下記の中から適切そうなクラスを使用する。ただしフォントの太さは `font-bold` で調整する
  ```
  .text-body-xs // text-xs
  .text-body-sm // text-sm
  .text-body-base // text-base
  .text-body-lg // text-lg
  .text-body-xl // text-xl
  .text-heading-2xl // text-2xl
  .text-heading-3xl // text-3xl
  .text-en-lg // text-lg
  .text-en-xl // text-xl
  .text-en-2xl // text-2xl
  ```
- アイコンは `lucide-react` を使用する
- 画像は `https://placehold.jp/` サービスを利用し、`https://placehold.jp/150x150.png`のように、適切なサイズを URL にあてて使用する
- ブレイクポイントを `md` とする
- リンクが必要な場合は、一旦 `https://example.com/` とする
- 一般的な a11y 対応をする
