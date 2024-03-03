export async function GasOracleQueryFn() {
    const response = await fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' + process.env.etherscan_key);
    return response.json();
}

export async function EtherPriceQueryFn() {
    const response = await fetch('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=' + process.env.etherscan_key);
    return response.json();
}

export async function GasOracleArbitrumQueryFn() {
    const response = await fetch('https://api.arbiscan.io/api?module=proxy&action=eth_gasPrice&apikey=' + process.env.arbiscan_key);
    return response.json();
}