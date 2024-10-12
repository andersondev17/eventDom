import Footer from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../app/globals.css";

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
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen flex-col" >
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
