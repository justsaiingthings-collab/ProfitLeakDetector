import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profit Leak Detector",
  description:
    "Detect unprofitable SKUs, margin drops, and hidden profit leaks before they cost your Amazon business thousands."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
