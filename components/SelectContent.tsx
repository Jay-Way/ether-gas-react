import { GasActionItem, L2SelectItem } from "@/types";
import {arbitrumLogo, ethereumLogo, optimismLogo, uniswapLogo, usdcTokenLogo} from "@/components/logos/logos";

export const gasEstimatorItems: Array<GasActionItem> = [
  {
    value: "swap",
    label: "Token swap (Uniswap)",
    requiredGas: 226228,
    startContent: uniswapLogo,
  },
  {
    value: "transfer",
    label: "ETH transfer",
    requiredGas: 21000,
    startContent: ethereumLogo,
  },
  {
    value: "erc20",
    label: "ERC-20 transfer",
    requiredGas: 65000,
    startContent: usdcTokenLogo,
  },
];

export const layer2Items: Array<L2SelectItem> = [
  {
    value: "arbitrum",
    label: "Arbitrum",
    startContent: arbitrumLogo,
  },
  {
    value: "optimism",
    label: "Optimism",
    startContent: optimismLogo,
  },
];
