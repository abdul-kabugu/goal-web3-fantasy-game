"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { AptosWalletAdapterProvider, useWallet } from "@aptos-labs/wallet-adapter-react";
import { UserContextProvider } from "./UserContext";


import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return  (
<NextThemesProvider {...props}>
<AptosWalletAdapterProvider
  //plugins={wallets}
  autoConnect={true}
  optInWallets={["Petra"]}
 // dappConfig={{ network: network?.MAINNET }}
  onError={(error) => {
    console.log("error", error);
  }}
>
<QueryClientProvider client={queryClient}>
  <UserContextProvider>
    {children}
    </UserContextProvider>
    </QueryClientProvider>
    </AptosWalletAdapterProvider>
    </NextThemesProvider>
  ) 
}
