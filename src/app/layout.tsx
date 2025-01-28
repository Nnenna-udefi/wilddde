import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wilde",
  description: "Beautiful Apartments in London",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "var(--font-median), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
