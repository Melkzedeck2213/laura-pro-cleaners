import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/context/AuthContext'

import { Metadata } from 'next'




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata= {
  title: "Laura Pro Cleaners | Trusted Cleaning Services",
  description: "Professional residential and commercial cleaning services you can trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>

        
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
