import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Inter, Noto_Sans_Lao } from "next/font/google";

const notoSansLao = Noto_Sans_Lao({
  subsets: ["lao"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-noto-sans-lao",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKV Group - Synergy, Kindred, Vision | ການປະສານພະລັງ, ຄວາມຜູກພັນ, ແລະ ວິໄສທັດ",
  description: "Leading software solutions in Laos. Synergy, Kindred, and Vision for your business growth. | ຜູ້ນໍາດ້ານການພັດທະນາຊອບແວໃນ ສປປ ລາວ. ມຸ່ງເນັ້ນການປະສານພະລັງ, ສ້າງຄວາມຜູກພັນ ແລະ ວິໄສທັດ ເພື່ອການເຕີບໃຫຍ່ຂອງທຸລະກິດທ່ານ.",
  keywords: ["SKV Group", "Software Development Laos", "IT Solutions", "Web Development", "Mobile App Development", "POS System", "Technology Provider", "ພັດທະນາຊອບແວ", "ຂຽນໂປຣແກຣມ", "ລະບົບ POS"],
  authors: [{ name: "SKV Group" }],
  creator: "SKV Group",
  publisher: "SKV Group",
  metadataBase: new URL("https://www.skvlao.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SKV Group - Synergy, Kindred, Vision | ການປະສານພະລັງ, ຄວາມຜູກພັນ, ແລະ ວິໄສທັດ",
    description: "Leading software solutions in Laos. Synergy, Kindred, and Vision for your business growth. | ຜູ້ນໍາດ້ານການພັດທະນາຊອບແວໃນ ສປປ ລາວ.",
    url: "https://www.skvlao.com",
    siteName: "SKV Group",
    images: [
      {
        url: "/web-app-manifest-512x512.png", // Using the largest icon as OG image
        width: 512,
        height: 512,
        alt: "SKV Group Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKV Group",
    description: "Leading software solutions in Laos. Synergy, Kindred, and Vision for your business growth.",
    images: ["/web-app-manifest-512x512.png"], // Using the largest icon as Twitter image
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lo" className={`${notoSansLao.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
