import "./globals.css";  // ✅ Required
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        {/* Main Content Wrapper - Ensures full height layout */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer - Keeps it at the bottom */}
        <footer className="text-center text-sm text-gray-400 p-4">
            &copy; {new Date().getFullYear()} Solairix Labs, LLC. All rights reserved.
        </footer>
        </body>
        </html>


    );
}