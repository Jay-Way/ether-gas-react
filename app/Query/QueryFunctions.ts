import {CryptoStatsSDK} from "@cryptostats/sdk";

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

export async function GetCryptoStatsFeeEstimation(query: string, network: string) {
  const sdk = new CryptoStatsSDK({
    moralisKey:  process.env.moralis_key,
  });
  const collection = sdk.getCollection('l2-fees');
  const hash = network === 'arbitrum-one' ? 'QmQcs1eAGQ35hGWpN9J56NA9vTDGfK8ac9mK4NJo5vVVrA' : 'QmVBxEtdKe9CHGaj2PyRDMHpJxXgRA47hxHaDAjEBBVgA9'
  await collection.fetchAdapterFromIPFS(hash)
  const adapter = collection.getAdapter(network)
  return adapter?.executeQuery(query);
}
