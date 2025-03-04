import type { Metadata } from "next";
import { Alice, Antic_Didone, Mr_De_Haviland } from "next/font/google";
import "./globals.css";

const alice = Alice({
  variable: "--font-alice",
  subsets: ["latin"],
  weight: "400",
});

const anticDidone = Antic_Didone({
  variable: "--font-antic-didone",
  subsets: ["latin"],
  weight: "400",
});

const mrDeHaviland = Mr_De_Haviland({
  variable: "--font-mr-de-haviland",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sandras Portfolio",
  description: "Showcasing my work and projects in web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alice.variable} ${anticDidone.variable} ${mrDeHaviland.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
