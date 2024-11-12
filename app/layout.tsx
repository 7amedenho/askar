import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Sections/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Sections/Footer";

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
  title: "ASKAR Co.",
  description: "Askar Co. for General Contracting, a leading provider of construction services in Egypt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          geistSans.variable +
          " " +
          geistMono.variable +
          " " +
          "bg-background text-foreground font-sans"
        }

      >
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
