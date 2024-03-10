## Ethereum L1 vs. L2 gas costs

This is a simple educational webapp, supposed to highlight the differences in gas cost between Ethereum L1 and L2.

## Disclaimer

The gas calculation for L2 might be incorrect or not accurate. I want to try and come up with a more
accurate calculation method, like saving past gas fee per transaction type in a backend and taking that fo
a calculation basis.

The main point of the app is to bring across the difference in gas price for L1 <> L2, so the calculations don't have to
be perfectly accurate.

## TODOs

- Add translation file, i118n etc. with language selector
- Allow custom gas limit entry
- Find more reliable gas limits for tx types?
- Add more L2s (Currently Arbitrum and Optimism)
- Add more transaction types (Limited by CryptoStats adapters)

PRs or feature requests are welcome!

## Gas limits

Current gas limits used by the app are

- Swap: 226228
- Transfer: 21000
- NFT Sale: 601953
- ERC-20: 65000


## Getting Started

Create a .env file and add these contents:

```
ETHERSCAN_KEY=xxx
ALCHEMY_KEY=xxx
MORALIS_KEY=xxx
```

Replacing xxx with an etherscan and alchemy api key

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
