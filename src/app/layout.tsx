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
  title: "Spongebob Text Generator",
  description: "Generate mOcKiNg sPoNgEbOb case text instantly in your browser!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Spongebob Text Generator",
    description: "Generate mOcKiNg sPoNgEbOb case text instantly in your browser!",
    url: "https://spongebob-text-generator.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
