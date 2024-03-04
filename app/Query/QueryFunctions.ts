export async function GasOracleQueryFn() {
    const response = await fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' + process.env.etherscan_key);
    return response.json();
}

export async function EtherPriceQueryFn() {
    const response = await fetch('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=' + process.env.etherscan_key);
    return response.json();
}

export async function BasePostFn(body: any, network: string) {
    const response = await fetch(
        'https://' + network + '-mainnet.g.alchemy.com/v2/' + process.env.alchemy_key_op,
        {
            method: 'POST',
            body: JSON.stringify(body)
        });
    return response.json();
}

export async function GasOracleOptimismPostFn() {
    const body = {
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_gasPrice"
    };
    return BasePostFn(body, 'opt')
}

export async function GasOracleArbitrumPostFn() {
    const body = {
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_gasPrice"
    };
    return BasePostFn(body, 'arb')
}

export async function PriorityFeeOptimismPostFn() {
    const body = {
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_maxPriorityFeePerGas"
    };
    return BasePostFn(body, 'opt')
}

export async function PriorityFeeEthereumPostFn() {
    const body = {
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_maxPriorityFeePerGas"
    };
    return BasePostFn(body, 'eth')
}