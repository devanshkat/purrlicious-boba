import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@700&family=Inter:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>
      
      <body className={`${inter.className} w-full min-h-screen m-0 p-0`}>
        {children}
      </body>
    </html>
  );
}
