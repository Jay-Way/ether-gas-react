import {CryptoStatsSDK} from "@cryptostats/sdk";
import {CryptoStatsL2OptionsEnum, CryptoStatsQueriesEnum} from "@/enums/enums";

export async function EtherPriceQueryFn() {
  const response = await fetch(
    "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=" +
      process.env.etherscan_key,
  );
  return response.json();
}

export async function BasePostFn(body: any, network: string) {
  const response = await fetch(
    "https://" +
      network +
      "-mainnet.g.alchemy.com/v2/" +
      process.env.alchemy_key_op,
    {
      method: "POST",
      body: JSON.stringify(body),
    },
  );
  return response.json();
}

export async function BaseFeeEthereumPostFn() {
  const body = {
    id: 1,
    jsonrpc: "2.0",
    method: "eth_gasPrice",
  };
  return BasePostFn(body, "eth");
}

export async function PriorityFeeEthereumPostFn() {
  const body = {
    id: 1,
    jsonrpc: "2.0",
    method: "eth_maxPriorityFeePerGas",
  };
  return BasePostFn(body, "eth");
}

export async function GetCryptoStatsFeeEstimation(query: CryptoStatsQueriesEnum, network: CryptoStatsL2OptionsEnum) {
  const sdk = new CryptoStatsSDK({
    moralisKey:  process.env.moralis_key,
  });
  const collection = sdk.getCollection('l2-fees');
  // IPFS collection hashes
  let hash = null;
  switch (network) {
    case CryptoStatsL2OptionsEnum.arbitrum:
      hash = 'QmQcs1eAGQ35hGWpN9J56NA9vTDGfK8ac9mK4NJo5vVVrA';
      break;
    case CryptoStatsL2OptionsEnum.optimism:
      hash = 'QmVBxEtdKe9CHGaj2PyRDMHpJxXgRA47hxHaDAjEBBVgA9';
      break;
    case CryptoStatsL2OptionsEnum.starknet:
      hash = 'QmSx3qAY8i6DqBvW7ustXk4ofQUEJe4CFNM6uziMAjuDcM';
      break;
    case CryptoStatsL2OptionsEnum.zksyncEra:
    hash = 'QmbgTEeUoef4osMPLzY9zTwMdRoW1nYJR9fKVDp2DRazdM';
      break;
  }

  await collection.fetchAdapterFromIPFS(hash)
  const adapter = collection.getAdapter(network)
  return adapter?.executeQuery(query);
}
