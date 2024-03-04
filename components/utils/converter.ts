export function fromWei(hexString: string) {
  // Wei to ETH
  return hexToInt(hexString) / 1000000000;
}

export function hexToInt(hexString: string) {
  return parseInt(hexString, 16);
}
