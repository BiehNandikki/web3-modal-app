import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from 'next/headers'

import { cookieToInitialState } from 'wagmi'

// import { config } from '../../config'
import Web3ModalProvider from '../../context'
// import { Chain } from '@web3modal/ethers';

const inter = Inter({ subsets: ["latin"] });




export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Web3ModalProvider >{children}</Web3ModalProvider>
      </body>
    </html>
  )
}