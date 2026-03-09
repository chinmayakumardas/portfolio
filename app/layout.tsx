





import type { Metadata } from "next";
import { League_Spartan, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chinmayakumardas.com"),
  title: "Chinmaya Kumar Das | Full-Stack Developer",
  description:
    "Chinmaya Kumar Das is a Full-Stack Developer specializing in Next.js, React, Node.js, and high-performance SEO-optimized web applications.",
  keywords: [
    "Chinmaya Kumar Das",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Chinmaya Kumar Das" }],
  openGraph: {
    title: "Chinmaya Kumar Das | Full-Stack Developer",
    description:
      "Full-Stack Developer building fast and search-optimized web applications.",
    url: "/",
    siteName: "Chinmaya Kumar Das",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {/* GA4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5DJS4H3VT4" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5DJS4H3VT4', { page_path: window.location.pathname });
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vmd63fia75");
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}