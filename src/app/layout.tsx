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
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NZAR - Fly.io Clone",
  description: "Fly.io Clone Using Next.js TailwindCss and TypeScript",
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
