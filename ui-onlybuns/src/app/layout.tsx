import type { Metadata } from "next";
import "./globals.css";
import {Navigation} from "@/app/components/navigation";
import Image from 'next/image'
import {roboto_mono, roboto} from "@/app/fonts/fonts";
import Link from "next/link"
import React from "react";

export const metadata: Metadata = {
  title: "OnlyBuns",
  description: "Only for Bunnie lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${roboto_mono.className}`}
    >
    <header className="flex items-center justify-between p-4 bg-greenish text-white shadow-md">
      <div className="header-left flex items-center">

        <Image
               src="/mochi-bunny.png"
               width={40}
               height={20}
               alt="Picture of the author"
        />
        <h1 className={`${roboto.className} text-4xl font-extrabold text-pink-500 ml-3 drop-shadow-[0_1.1px_1.1px_rgba(0,0,0,0.5)]`}>
          <Link href="/">
            OnlyBuns
          </Link>
        </h1>

      </div>
      <div className="header-right">
        <Navigation/>
      </div>
    </header>

    {children}

    <footer className="text-green-900 bg-greenish p-4 text-center">
      <p>Bunnie lovers unite!</p>
    </footer>
    </body>
    </html>
  );
}
