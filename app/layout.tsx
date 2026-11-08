import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const font = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://muhammad-dawar.vercel.app";
const title = "Muhammad Dawar | Full Stack AI Engineer";
const description =
  "Full Stack AI Engineer building fast web apps with Next.js, React and Node.js, AI automation with n8n, Gemini and RAG, and end-to-end QA with Playwright.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Muhammad Dawar",
    "Full Stack AI Engineer",
    "Next.js Developer",
    "React Developer",
    "n8n Automation",
    "RAG Chatbot",
    "Playwright",
  ],
  authors: [{ name: "Muhammad Dawar", url: siteUrl }],
  icons: {
    icon: "/images/head-icon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Muhammad Dawar",
    images: [{ url: "/images/my-dp.png", width: 512, height: 512, alt: "Muhammad Dawar" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/images/my-dp.png"],
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
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
