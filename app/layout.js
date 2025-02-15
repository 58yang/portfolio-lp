import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import { Noto_Serif_JP, Montserrat } from "next/font/google";

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

/**
 * メタデータの設定
 */
export const metadata = {
  title: "Drone Service - プロフェッショナルなドローンサービス",
  description:
    "ドローン撮影、点検サービス、3Dモデル生成など、プロフェッショナルなドローンサービスを提供します。",
};

/**
 * ルートレイアウト
 * @param {Object} props - プロパティ
 * @param {React.ReactNode} props.children - 子要素
 * @returns {JSX.Element} ルートレイアウト
 */
export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${notoSerifJP.variable} ${montserrat.variable} font-serif antialiased`}
      >
        <Header />
        <main style={{ marginTop: "90px", minHeight: "calc(100vh - 90px)" }}>
          {children}
        </main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
