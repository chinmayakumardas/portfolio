import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Chinmaya Kumar Das | Full-Stack Developer & SEO Expert",
  description:
    "Chinmaya Kumar Das is a Full-Stack Developer and SEO Expert specializing in Next.js, React, Node.js, and high-performance SEO-optimized web applications.",
  keywords: [
    "Chinmaya Kumar Das",
    "Full Stack Developer",
    "SEO Expert",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Chinmaya Kumar Das" }],
  creator: "Chinmaya Kumar Das",

  openGraph: {
    title: "Chinmaya Kumar Das | Full-Stack Developer & SEO Expert",
    description:
      "Chinmaya Kumar Das, Full-Stack Developer & SEO Expert building fast and search-optimized web applications.",
    url: "https://chinmayakumardas.com",
    siteName: "Chinmaya Kumar Das",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5DJS4H3VT4"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5DJS4H3VT4');
          `}
        </Script>

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="-E3d5lcWSRoF44sPMxEbcZJKgd468wBlpVquntc7dyg"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
