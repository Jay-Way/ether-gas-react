## Ethereum L1 vs. L2 gas costs

This is a simple educational webapp, supposed to highlight the differences in gas cost between Ethereum L1 and L2.

Data from Etherscan, Alchemy and CryptoStats

## TODOs

- Allow custom gas limit entry
- Find more reliable gas limits for tx types?
- Add more transaction types (Limited by CryptoStats adapters)

PRs or feature requests are welcome!

## Gas limits

Current gas limits used by the app are

- Swap: 226228
- Transfer: 21000
- NFT Sale: 601953
- ERC-20: 65000

## Translations

Translation files are stored in `/public/locales/{language}/translation.json`.

## Getting Started

Create a .env file and add these contents, replacing xxx with your credentials:

```
ETHERSCAN_KEY=xxx
ALCHEMY_KEY=xxx
MORALIS_KEY=xxx

# Only needed for deployment script:
WORKING_DIR=xxx
AWS_PROFILE=xxx
BUCKET_NAME=xxx
CLOUDFRONT_DISTRIBUTION=xxx
```

First, run the development container:

```bash
docker compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Entering the development container

`docker compose exec ether-gas-react sh`

## Deploying

There is a simple deploy.sh script which will push the contents of `out` into s3 and invalidate a cloudfront distribution.
Setting up these resources is not part of this project

```
npm run build
sh ./deploy.sh
```