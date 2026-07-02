import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SalesHub Global | Elevating Sales Through AI & Technology",
  description: "SalesHub Global is the ultimate enterprise-grade AI automation engine for modern sales pipelines. Revolutionize lead generation, outreach orchestration, and voice calling with LeadEngine and VoicePilot.",
  keywords: "SalesHub, Sales AI, Outbound Automation, LeadEngine, VoicePilot, AI SDR, Sales Agent, Conversational AI",
  robots: "index, follow",
  metadataBase: new URL("https://saleshubglobal.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "SalesHub Global | Elevating Sales Through AI & Technology",
    description: "Enterprise-grade AI agents that automate lead generation, campaign outreach, and conversational voice calling at a global scale.",
    url: "https://saleshubglobal.com",
    siteName: "SalesHub Global",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SalesHub Global Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SalesHub Global | Elevating Sales Through AI & Technology",
    description: "Enterprise-grade AI agents that automate lead generation, campaign outreach, and conversational voice calling at a global scale.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#F7F8FC] text-[#071126] antialiased selection:bg-accent-blue/15 selection:text-accent-blue min-h-screen">
        {children}
      </body>
    </html>
  );
}
