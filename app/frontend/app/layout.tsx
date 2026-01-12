import type { Metadata } from "next";
import { Noto_Sans_JP, Roboto } from "next/font/google";
import "./theme/index.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Reread - 自分を変えてくれる、本物の文章に出会う",
  description:
    "若年層の読書離れという社会課題に向き合い、読書を「記録し、振り返り、共有できる体験」として再設計した読書サービスです。読んだ本や心に残った文章を蓄積・可視化することで、読書を一過性の行為ではなく、日常の中に自然と続いていく習慣へと導きます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={`${notoSansJP.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
