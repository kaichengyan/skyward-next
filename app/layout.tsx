import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { VercelWebAnalytics } from "@/components/VercelWebAnalytics";
import "katex/dist/katex.min.css";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import "./prism.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Skyward",
    default: "Skyward",
  },
  description: "越而胜己",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <main className="container mx-auto max-w-3xl px-6 mt-2 sm:mt-8">
            {children}
          </main>
          <Footer />
        </Providers>
        <VercelWebAnalytics />
      </body>
    </html>
  );
}
