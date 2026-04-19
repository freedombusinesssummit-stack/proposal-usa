import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FBS 2026 — USA Mobility Edition | Partner Proposal",
  description: "Freedom Business Summit 2026 · USA Mobility Edition · Speaking & Partnership Engagement",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{fontFamily:"'Inter',sans-serif"}}>{children}</body>
    </html>
  );
}
