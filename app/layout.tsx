import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/Cairo-Bold.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Cairo-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "ASKAR GROUP",
    template: "%s | ASKAR GROUP",
  },
  description:
    "Askar Co. for General Contracting, a leading provider of construction services in Egypt.",
  openGraph: {
    title: "عسكر للمقاولات العمومية",
    description:
      "Askar Co. for General Contracting, a leading provider of construction services in Egypt.",
    images: [
      {
        url: "https://askargroups.com/opengraph-image.png",
        width: 800,
        height: 600,
        alt: "Askar Group",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://askargroups.com/opengraph-image.png"
        />
      </Head>
      <body
        className={
          geistSans.variable +
          " " +
          geistMono.variable +
          " " +
          "bg-background text-foreground font-sans"
        }
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
