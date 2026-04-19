import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FBS 2026 — USA Mobility Edition | Partner Proposal",
  description: "Freedom Business Summit 2026 · USA Mobility Edition · Speaking & Partnership Engagement · 27–28 June 2026",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
