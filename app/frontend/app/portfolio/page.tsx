import React from "react";

type Props = Record<string, never>;

const PortfolioPage: React.FC<Props> = () => {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16 md:px-10">
      <h1 className="text-4xl tracking-widest text-stone-300 text-center font-arial">
        PORTFOLIO
      </h1>
      <section className="mx-auto w-full max-w-4xl pt-12 flex flex-col gap-16">
        <article>
          <div className="flex items-center gap-3">
            <span className="py-1 px-3 bg-stone-300 text-stone-800 text-xs rounded-full">
              個人開発
            </span>
            <h2 className="text-xl font-bold">モバイルアプリデザイン</h2>
          </div>
          <p className="mt-2 text-sm opacity-50 max-w-120">
            図書館横断検索システムを想定した架空サービスのプロトタイプです。
          </p>
          <iframe
            width="400"
            height="800"
            className="mt-4"
            src="https://embed.figma.com/proto/vcX8OII8XXdvtDSeXA914E/Mobile-App-v1.0.0?page-id=10%3A70&node-id=10-623&viewport=303%2C216%2C0.22&scaling=scale-down&content-scaling=fixed&starting-point-node-id=106%3A945&embed-host=share"
          ></iframe>
        </article>
        <article>
          <div className="flex items-center gap-3">
            <span className="py-1 px-3 bg-stone-300 text-stone-800 text-xs rounded-full">
              個人開発
            </span>
            <h2 className="text-xl font-bold">Figma & FigJam ウィジェット</h2>
          </div>
          <p className="mt-2 text-sm opacity-50 max-w-120">
            最近、テーブル設計や情報整理の時にFigJamで簡単にエンティティが作れると良いなと思って、『Entity
            Maker』作成しました。詳細は
            <a
              href="https://www.figma.com/community/widget/1601520778268503122/entity-maker"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              aria-label="FigmaのEntity Makerウィジェットを見る（新しいタブで開きます）"
            >
              こちら
            </a>
          </p>
          <iframe
            width="800"
            height="450"
            className="mt-4"
            src="https://embed.figma.com/proto/DcRY1zpSetY3DiF0XBDudQ/Figma-Plugin--Widget?page-id=0%3A1&node-id=1-12&viewport=198%2C173%2C0.17&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A12&embed-host=share"
          ></iframe>
        </article>
      </section>
    </main>
  );
};

export default PortfolioPage;
