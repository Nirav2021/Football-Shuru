"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import localFont from "next/font/local";
import "./globals.css";
import SideBar from "../components/Sidebar";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({ children }) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <QueryClientProvider client={queryClient}>
                    <div className="bg-[#303030] flex min-h-screen flex-col w-full md:flex-row min-w-screen">
                        <aside className="w-full md:w-64 flex-shrink-0">
                            <SideBar />
                        </aside>
                        <main className="">{children}</main>
                    </div>
                </QueryClientProvider>
            </body>
        </html>
    );
}
