import {
  ClerkProvider
} from '@clerk/nextjs';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import './globals.css';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "EventDom",
  description: "EventDom is a platform for event management.",
  icons: {
    icon: "/assets/images/logo.svg",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}