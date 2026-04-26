import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise — Upskill Your Workforce at Scale",
  description:
    "India's most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill your teams with curated programs, live mentorship, and real-time analytics.",
  keywords:
    "enterprise learning, workforce upskilling, IIT programs, corporate training, L&D platform",
  openGraph: {
    title: "Accredian Enterprise — Upskill Your Workforce at Scale",
    description:
      "The complete operating system for enterprise learning. Custom programs, live mentorship, and real-time analytics.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
