import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import "katex/dist/katex.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

// Configure the sans (body) font
const sansFont = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Configure the mono (code block) font
const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Engineering Economics Notes",
    template: "%s | EE",
  },
  description: "A Comprehensive documentation by Muhammad Abdul Rahim Attari",
};

// Replaced LayoutProps with a generic layout type for safety, update if you use a specific Fumadocs type wrapper
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
