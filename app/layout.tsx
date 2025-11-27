import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { diodrum } from "./fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SGH Aseer – Neurosurgery Center",
  description:
    "Advanced neurosurgery care at Saudi German Hospital Aseer.",
  icons: {
    icon: "/favicon.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${diodrum.variable} font-sans antialiased`}>

        {children}
      </body>
    </html>
  );
}
