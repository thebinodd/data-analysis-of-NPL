import type { Metadata } from "next";
import "./globals.css";
import {Toaster} from  "react-hot-toast";



export const metadata: Metadata = {
  title: "NPL Data Analysis",
  description: "Explore insights from 2008-2026 Nepal Premier League seasons with a clean, readable interface. Discover trends, team performance, player impact, and match patterns in the Nepal Premier League dataset.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
    >
      
      <body className=""><Toaster /> {children}</body>
    </html>
  );
}
