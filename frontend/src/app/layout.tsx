import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Todo",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "min-h-screen bg-background bg-gray-100 font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
