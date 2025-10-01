import type { Metadata } from "next";
import StyledComponentsRegistry from '@/app/lib/StyledComponentsRegistry';
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
// @ts-expect-error: No type definitions for next/font/google
import { Inter } from "next/font/google";




const inter = Inter({ subsets: ["latin"], weight : ["400", "500",  "600", "700", "800","900"]})



export const metadata: Metadata = {
  title: "Minimal-Portfolio",
  description: "This is the portfolio website of a software engineer who developed a clean ui design a on webpages ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={'$(inter.className) antialiased bg-neutral-100 dark:bg-neutral-700'}>
          {children}
        </body>
      </html>
    </>
  );
}



