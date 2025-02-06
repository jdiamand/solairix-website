import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Solairix",
    description: "AI/ML and FinTech projects, research, and blog.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {/* Navigation Bar */}
        <nav className="flex justify-center gap-6 p-4 bg-gray-900 text-white text-lg">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <Link href="/about" className="hover:text-yellow-400">About</Link>
            <Link href="/projects" className="hover:text-yellow-400">Projects</Link>
            <Link href="/blog" className="hover:text-yellow-400">Blog</Link>
        </nav>

        {/* Main Content */}
        <main className="p-8">{children}</main>
        </body>
        </html>
    );
}