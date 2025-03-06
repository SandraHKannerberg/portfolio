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
  title: "Sandra Höst Kannerberg | Portfolio",
  description:
    "Explore the portfolio of Sandra Höst Kannerberg. I'm a fullstack skilled web developer specializing in frontend solutions. Get to know me, discover my projects, work experience, and expertise in creating user-friendly and accessible web applications. Feel free to reach out if you're interested in collaborating or if you have any questions!",
  // TODO: add my url after deploy
  // metadataBase: new URL("my website url"),
  keywords:
    "Sandra Höst Kannerberg, web developer, portfolio, frontend, backend, fullstack, web development, accessible web design, coding projects, software development, web development portfolio, frontend development portfolio, fullstack development portfolio",
  creator: "Sandra Höst Kannerberg",
  openGraph: {
    title: "Sandra Höst Kannerberg | Portfolio",
    description:
      "Explore the portfolio of Sandra Höst Kannerberg. I'm a fullstack skilled web developer specializing in frontend solutions. Get to know me, discover my projects, work experience, and expertise in creating user-friendly and accessible web applications. Feel free to reach out if you're interested in collaborating or if you have any questions!",
    images: [
      {
        url: "/images/portfolio-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Sandra Höst Kannerberg's Portfolio",
      },
    ],
    type: "website",
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
        className={`${alice.variable} ${anticDidone.variable} ${mrDeHaviland.variable} antialiased leading-7 font-primary non-italic`}
      >
        {children}
      </body>
    </html>
  );
}
