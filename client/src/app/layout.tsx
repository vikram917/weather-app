import type { Metadata } from "next";
import { Inter,Nunito } from "next/font/google";
import "./globals.css";

const inter = Nunito({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Weather App",
  description: "By Vikram Baghel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
