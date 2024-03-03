## Ethereum L1 vs. L2 gas costs

This is a simple educational webapp, supposed to highlight the differences in gas cost between Ethereum L1 and L2.

## TODOs

- Add translation file, i118n etc. with language selector
- Allow custom gas limit entry
- Find more reliable gas limits for tx types?
- 

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
