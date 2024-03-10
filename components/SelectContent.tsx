import { GasActionItem, L2SelectItem } from "@/types";
import { Avatar, Image } from "@nextui-org/react";
import React from "react";

export const gasEstimatorItems: Array<GasActionItem> = [
  {
    value: "swap",
    label: "Token swap (Uniswap)",
    requiredGas: 226228,
    startContent: (
      <Image alt="eth logo" radius="sm" src="uniswap-uni-logo.svg" width={25} />
    ),
  },
  {
    value: "transfer",
    label: "ETH transfer",
    requiredGas: 21000,
    startContent: (
      <Image
        alt="eth logo"
        radius="sm"
        src="https://ethereum.org/de/_next/static/media/eth-diamond-rainbow.bb509e8a.png"
        width={25}
      />
    ),
  },
  {
    value: "erc20",
    label: "ERC-20 transfer",
    requiredGas: 65000,
    startContent: <Avatar name="ERC-20" />,
  },
];

export const layer2Items: Array<L2SelectItem> = [
  {
    value: "arbitrum",
    label: "Arbitrum",
    startContent: (
      <Image
        alt="arb logo"
        radius="sm"
        src="https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=029"
        width={25}
      />
    ),
  },
  {
    value: "optimism",
    label: "Optimism",
    startContent: (
      <Image
        alt="opt logo"
        radius="sm"
        src="https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg?v=029"
        width={25}
      />
    ),
  },
];
