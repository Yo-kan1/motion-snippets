import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motion Snippets",
  description: "UIアニメーションの実装コード集。 気になるアニメーションをクリックして、実装コードを確認できます。自分のプロジェクトの環境に合った技術スタックのコードを選べるようにする予定です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gray-50 text-slate-800 min-h-screen flex flex-col`}>

        <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto font-bold text-xl tracking-tight">
            Motion Snippets
          </div>
        </header>

        <main className="flex-1 max-w-5xl w-full mx-auto p-6">
          {children}  {/* それぞれのページでここに中身が入る */}
        </main>

      </body>
    </html>
  );
}