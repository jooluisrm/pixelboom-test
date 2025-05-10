import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { HeaderRight } from "@/components/header/headerRight";
import { Toaster } from "@/components/ui/toaster";
import img from "../../public/favicon.png"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Pixel Boom | Test",
    description: "Teste pratico vaga: Front-End React",
    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <SidebarProvider>
                    <AppSidebar />
                    <main className="w-full">
                        <header className="h-[72px] border-b-[1px] flex items-center justify-between px-4">
                            <SidebarTrigger />
                            <HeaderRight />
                        </header>
                        {children}
                        <Toaster />
                    </main>
                </SidebarProvider>
            </body>
        </html>
    )
}
