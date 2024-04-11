// import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { createWeb3Modal, defaultConfig, Chain } from "web3js-web3modal/react";
// import { cookieStorage, createStorage } from 'wagmi'
// import { mainnet, sepolia } from 'wagmi/chains'


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '6e23cd13756530f550b33fcf07302fdc'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const mainnet = {
  id: 1,
  name: 'Ethereum',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://cloudflare-eth.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Etherscan',
      url: 'https://etherscan.io',
      apiUrl: 'https://api.etherscan.io/api',
    },
  },
} as unknown as Chain

const web3Config = {
  metadata,
}
createWeb3Modal({
  web3Config,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

export function Web3Modal({ children }: { children: any }) {
  return children
}