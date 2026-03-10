import type { Metadata } from "next";
import { Marcellus, Jost } from "next/font/google";
import "./globals.css";
import PreloaderGate from "./components/PreloaderGate";
import LenisProvider from "./components/LenisProvider";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: ["400"],
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elephant Island",
  description: "Elephant Island",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${jost.variable} antialiased`}>
        <LenisProvider>
          <PreloaderGate>{children}</PreloaderGate>
        </LenisProvider>
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
