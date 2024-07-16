
import "./globals.css";

import { ThemeProvider } from "./components/theme-provider";
import { WalletProvider } from "@/components/wallet-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { PropsWithChildren } from "react";
import { AutoConnectProvider } from "@/components/AutoConnectProvider";
import Sidebar from "./components/sidebar/Sidebar";
import TopNavbar from "./components/TopNavbar";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aptos Wallet Adapter Example",
  description:
    "An example of how to use Aptos Wallet Adapter with React and Next.js.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          " min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
      
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AutoConnectProvider>
            <WalletProvider>
             
              <div className="flex  space-x-3">
                 <Sidebar  />
                 <div className=" overflow-x-hidden  w-full pr-2">
                 <TopNavbar />
              {children}
              </div>
              </div>
              <Toaster />
            </WalletProvider>
          </AutoConnectProvider>
        </ThemeProvider>
     
      </body>
    </html>
  );
}
