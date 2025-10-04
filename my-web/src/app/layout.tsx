import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Inter } from "next/font/google";
import Navbar from "./components/ui/navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Yash Bhanuse - Design Engineer",
  description: "Creating with code. Small details matter.",
  keywords: ["yash bhanuse", "design engineer", "frontend developer", "portfolio"],
  authors: [{ name: "Yash Bhanuse" }],
  creator: "Yash Bhanuse",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashbhanuse.com",
    title: "Yash Bhanuse - Design Engineer",
    description: "Creating with code. Small details matter.",
    siteName: "Yash Bhanuse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Bhanuse - Design Engineer",
    description: "Creating with code. Small details matter.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}



