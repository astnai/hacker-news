import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hacker news clone",
  description: "a modern and minimalistic clone of hacker news",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background-start-rgb text-foreground-rgb`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
