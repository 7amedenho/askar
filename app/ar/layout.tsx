import Head from "next/head";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/app/ar/components/Sections/Navbar";
import { Providers } from "../providers";
import Footer from "@/app/ar/components/Sections/Footer";
import Loaderar from "@/components/ui/Loaderar";

const geistSans = localFont({
  src: "../fonts/Cairo-Bold.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/Cairo-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={
          geistSans.variable +
          " " +
          geistMono.variable +
          " " +
          "bg-background text-foreground font-sans"
        }
      >
        <Head>
          <title>مجموعة عسكر | خدمات المقاولات العامة في مصر</title>
          <meta
            name="description"
            content="اكتشف مجموعة عسكر، الرائدة في خدمات المقاولات العامة والإنشاءات في مصر. نقدم نتائج مميزة تلبي جميع احتياجاتك الإنشائية."
          />
          <meta
            name="keywords"
            content="مجموعة عسكر، مقاولات عامة، خدمات إنشاءات، إنشاءات مصر، عسكر، AskarCo"
          />
          <meta name="author" content="مجموعة عسكر" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://askar-Group.com/" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Organization",
                name: "مجموعة عسكر",
                url: "https://askar-Group.com/",
                logo: "https://askar-Group.com/logoDM.png",
                description:
                  "مجموعة عسكر هي المزود الرائد لخدمات المقاولات العامة والإنشاءات في مصر.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "القاهرة",
                  addressCountry: "مصر",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+201000459052",
                  contactType: "خدمة العملاء",
                },
              }),
            }}
          />
        </Head>
        <Loaderar Logo={"/logoDM.png"}/>
        <Navbar />
        <main className="w-full min-h-screen">
          <Providers>{children}</Providers>
        <Footer/>
        </main>
      </body>
    </html>
  );
}
