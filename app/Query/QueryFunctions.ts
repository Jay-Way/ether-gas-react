export async function GasOracleQueryFn() {
    const response = await fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' + process.env.etherscan_key);
    return response.json();
}

export async function EtherPriceQueryFn() {
    const response = await fetch('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=' + process.env.etherscan_key);
    return response.json();
}

export async function GasOracleOptimismPostFn() {
    const body = {
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_gasPrice"
    };
    const response = await fetch(
        'https://opt-mainnet.g.alchemy.com/v2/' + process.env.alchemy_key_op,
        {
            method: 'POST',
            body: JSON.stringify(body)
        });
    return response.json();
}

export async function GasOracleArbitrumPostFn() {
    const body = {
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_gasPrice"
    };
    const response = await fetch(
        'https://arb-mainnet.g.alchemy.com/v2/' + process.env.alchemy_key_op,
        {
            method: 'POST',
            body: JSON.stringify(body)
        });
    return response.json();
}