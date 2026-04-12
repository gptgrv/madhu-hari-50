import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr Hari & Madhu Gupta — 50 Golden Years",
  description: "Celebrating 50 years of love, laughter, and togetherness. Happy Golden Anniversary!",
  openGraph: {
    title: "Dr Hari & Madhu Gupta — 50 Golden Years",
    description: "Celebrating 50 years of love, laughter, and togetherness.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
