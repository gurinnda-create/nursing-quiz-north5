import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "北5病棟 新人看護師必修問題集",
  description: "呼吸器内科新人看護師のための学習多機能クイズアプリ",
  manifest: "/manifest.json",
  themeColor: "#0369a1",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "北5病棟クイズ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
