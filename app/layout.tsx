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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="font-sans">
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
