import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { HeaderTextProvider } from "@/context/headerTextContext/HeaderTextProvider";

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
      <body
        className='antialiased mx-auto flex flex-col bg-gradient-to-r shadow-lg lg:shadow-red-600 from-black to-base-900 h-svh max-w-[1400px]'
      >
        <HeaderTextProvider>
          <Navbar />
          <main className="w-full p-5 flex flex-grow">
            {children}
          </main>
        </HeaderTextProvider>
      </body>
    </html>
  );
}