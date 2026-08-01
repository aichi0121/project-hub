import type { Metadata } from "next";
import "./globals.css";

const image = "https://aichi0121.github.io/project-hub/og.png";
export const metadata: Metadata = {
  metadataBase: new URL("https://aichi0121.github.io/project-hub/"),
  title: "Project Hub｜aichi0121 的作品入口",
  description: "集中開啟與管理 aichi0121 的常用網站與工具。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "你的作品，都在這裡。", description: "aichi0121 的私人 Project Hub", images: [{ url: image, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Project Hub", description: "aichi0121 的私人作品入口", images: [image] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
