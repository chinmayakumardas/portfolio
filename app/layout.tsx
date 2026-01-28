



// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Chinmaya Kumar Das | Full-Stack Developer & SEO Expert",
//   description:
//     "Chinmaya Kumar Das is a Full-Stack Developer and SEO Expert specializing in Next.js, React, Node.js, and high-performance SEO-optimized web applications.",
//   keywords: [
//     "Chinmaya Kumar Das",
//     "Full Stack Developer",
//     "SEO Expert",
//     "Next.js Developer",
//     "React Developer",
//     "Web Developer Portfolio",
//     "JavaScript Developer",
//     "Frontend Developer",
//     "Backend Developer",
//   ],
//   authors: [{ name: "Chinmaya Kumar Das" }],
//   creator: "Chinmaya Kumar Das",

//   openGraph: {
//     title: "Chinmaya Kumar Das | Full-Stack Developer & SEO Expert",
//     description:
//       "Portfolio of Chinmaya Kumar Das, Full-Stack Developer & SEO Expert building fast and search-optimized web applications.",
//     url: "https://yourdomain.com",
//     siteName: "Chinmaya Kumar Das Portfolio",
//     images: [
//       {
//         url: "https://yourdomain.com/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Chinmaya Kumar Das Portfolio",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google Analytics (GA4) – Production Only */}
//         {process.env.NODE_ENV === "production" && (
//           <>
//             <Script
//               strategy="afterInteractive"
//               src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
//             />

//             <Script id="ga4" strategy="afterInteractive">
//               {`
//                 window.dataLayer = window.dataLayer || [];
//                 function gtag(){dataLayer.push(arguments);}
//                 gtag('js', new Date());
//                 gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
//                   page_path: window.location.pathname,
//                 });
//               `}
//             </Script>
//           </>
//         )}

//         {/* Google Search Console Verification */}
//         <meta
//           name="google-site-verification"
//           content="-E3d5lcWSRoF44sPMxEbcZJKgd468wBlpVquntc7dyg"
//         />
//       </head>

//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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
    "Chinmaya Kumar Das is a Full-Stack Developer and SEO Expert specializing in Next.js, React, Node.js, and SEO-optimized web applications.",

  keywords: [
    "Chinmaya Kumar Das",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "SEO Expert",
  ],

  authors: [{ name: "Chinmaya Kumar Das" }],
  creator: "Chinmaya Kumar Das",

  openGraph: {
    title: "Chinmaya Kumar Das | Full-Stack Developer & SEO Expert",
    description: "Portfolio of Chinmaya Kumar Das",
    url: "https://yourdomain.com",
    siteName: "Chinmaya Kumar Das",
    type: "website",
  },

  verification: {
    google: "-E3d5lcWSRoF44sPMxEbcZJKgd468wBlpVquntc7dyg",
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5DJS4H3VT4"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-5DJS4H3VT4');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
