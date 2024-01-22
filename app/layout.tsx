import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { VercelWebAnalytics } from "@/components/VercelWebAnalytics";
import "katex/dist/katex.min.css";
import React from "react";
import "./globals.css";
import "./prism.css";
import { Providers } from "./providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Skyward",
    default: "Skyward",
  },
  description: "Beyond awesome.",
  authors: [{ name: "Skyward" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head />
      <body className="font-sans">
        <Providers>
          <div className="min-h-screen relative">
            <NavBar />
            <main className="container mx-auto max-w-4xl px-6 mt-2 sm:mt-8">
              {children}
            </main>
            <Footer />
            <div
              className="absolute right-0 left-0 z--1 bottom-[calc(100%-150px)]
                aspect-[1/3] content-[''] blur-3xl rounded-9999px border-0 opacity-20
                bg-gradient-to-r from-purple-400 to-red-400 dark:from-cyan-400 dark:to-blue-400"
            ></div>
          </div>
        </Providers>
        <VercelWebAnalytics />
      </body>
    </html>
  );
}
