import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EdgeWord - Intelligence That Never Sleeps",
  description: "Real-time competitive monitoring across every signal — hiring, pricing, reviews, patents, social.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
