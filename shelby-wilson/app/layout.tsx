import type { Metadata } from "next";
import NavBar from '@/components/NavBar';
import { Raleway } from "next/font/google";
import Image from "next/image";
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
        <NavBar />
        <main>
          {children}
        </main>
        <footer className="row-start-3 flex gap-[16px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://linkedin.com/in/shelby-wilson22"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <Image
              aria-hidden
              src="/linkedIn.jpg"
              alt="LinkedIn Logo"
              width={16}
              height={16}
            />
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/shelbyleanne22"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <Image
              aria-hidden
              src="/gitHub.png"
              alt="GitHub Logo"
              width={16}
              height={16}
            />
          </a>
        </footer>
      </body>
    </html>
  );
}
