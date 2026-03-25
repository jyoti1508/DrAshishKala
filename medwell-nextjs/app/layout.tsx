import type { Metadata } from "next";
import { Montserrat, Outfit, Syne } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Dr. Ashish Kala | Medical & Health Care Solutions",
  description: "Caring is our calling. Changing Health Care for Good. We’re here for life. Feel better.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
      </head>
      <body className={`${outfit.variable} ${montserrat.variable} ${syne.variable}`} style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: "'Outfit', sans-serif",
        overflowX: 'hidden'
      }}>
        {children}
      </body>
    </html>
  );
}
