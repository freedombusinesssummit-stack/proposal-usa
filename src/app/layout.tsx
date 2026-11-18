import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FBS 2027 — USA Mobility Edition | Partner Proposal",
  description: "Freedom Business Summit 2027 · USA Mobility Edition · Speaking & Partnership Engagement · 24–25 February 2027",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
