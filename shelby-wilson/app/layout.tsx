import type { Metadata } from "next";
import NavBar from '@/components/NavBar';
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Shelby Wilson",
  description: "A bird's eye view of Shelby Wilson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
      >        
      <NavBar/>
        {children}
      </body>
    </html>
  );
}
