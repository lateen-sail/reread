# コンポーネント実装ガイドライン

このドキュメントは、本リポジトリにおいて  
**コード生成・修正・レビューを行う際に従う前提条件と実装ルール**を定義する。

## プロジェクト概要

- リポジトリの目的: ポートフォリオ用です。GitHub ページで確認ができれば OK です
- 実行環境: Node.js 20 系
- 使用フレームワーク: React 19 系 / Next.js 16 系
- パッケージマネージャ: npm
- 使用言語: TypeScript を優先

## 基本テンプレート

```
import React from "react";
// import Component from "@/components/reread-ui/xxx/Component"; reread-ui の既存コンポーネントを優先して使用してください
// import { IconName } from "lucide-react"; アイコンは原則 lucide-react を使用してください
// import { cn } from "@/lib/utils"; className 結合が必要な場合のみ使用してください
// import { useXxx } from "./hooks/useXxx"; ビジネスロジックは原則 hooks に切り出してください
// import { XxxType } from "./types"; 再利用可能な型は外部ファイルに定義してください
// import { xxxSchema } from "./schema"; フォーム実装では RHF + schema を使用してください
// import { ChildComponent } from "./ChildComponent"; 300 行を超える、または責務が増えた場合は分割してください

type Props = {};

const ComponentName: React.FC<Props> = ({}) => {
  return <></>;
};

export default ComponentName;
```

- 使用しなかった import・型・hooks は必ず削除する

## 命名規則

- コンポーネント: PascalCase
- Hooks: camelCase
- 型: PascalCase
- ファイル・フォルダ名: kebab-case

## アクセシビリティ

- 入力要素にはラベルを付与する
- キーボード操作を保証する
- セマンティック HTML を使用する
