import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const mackinacPro = localFont({
  src: "./fonts/MackinacPro.otf",
  variable: "--mackinacPro",
  weight: "500",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--bricolage",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NZAR - Fly.io Landing Page Clone",
  description:
    "Explore a high-quality Fly.io landing page clone built with Next.js, TailwindCSS, and TypeScript. Experience fast loading, responsive design, and streamlined code inspired by Fly.io's web interface.",
  keywords: [
    "Fly.io clone",
    "Next.js project",
    "TailwindCSS design",
    "TypeScript web app",
    "landing page clone",
    "responsive design",
    "frontend development",
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${mackinacPro.variable} antialiased box-border`}
      >
        {children}
      </body>
    </html>
  );
}
