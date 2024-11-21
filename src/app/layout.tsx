import "bootstrap/dist/css/bootstrap.min.css";

import BootstrapClient from "@/components/BootstrapClient";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const helveticaNeueR = localFont({
  src: "./fonts/HelveticaNeueCyr-Roman.woff",
  variable: "--font-helvetica-neue-r",
  weight: "100 300 400 500 900",
});

const helveticaNeueB = localFont({
  src: "./fonts/HelveticaNeue-Bold.woff",
  variable: "--font-helvetica-neue-b",
  weight: "100 300 400 700",
});

export const metadata: Metadata = {
  title: "Software Recruitment co.",
  description: "A software recruitment company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${helveticaNeueB.variable} ${helveticaNeueR.variable}`}
      >
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
