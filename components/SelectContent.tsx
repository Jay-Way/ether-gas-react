import { GasActionItem, L2SelectItem } from "@/types";
import {arbitrumLogo, ethereumLogo, optimismLogo, starknetLogo, uniswapLogo, usdcTokenLogo, zkSyncEraLogo} from "@/components/logos/logos";
import {L2OptionsEnum, TransferTypeOptionsEnum} from "@/enums/enums";

export const gasEstimatorItems: Array<GasActionItem> = [
  {
    value: TransferTypeOptionsEnum.swap,
    label: "Token swap (Uniswap)",
    requiredGas: 226228,
    startContent: uniswapLogo,
  },
  {
    value: TransferTypeOptionsEnum.transfer,
    label: "ETH transfer",
    requiredGas: 21000,
    startContent: ethereumLogo,
  },
  {
    value: TransferTypeOptionsEnum.erc20,
    label: "ERC-20 transfer",
    requiredGas: 65000,
    startContent: usdcTokenLogo,
  },
];

export const layer2Items: Array<L2SelectItem> = [
  {
    value: L2OptionsEnum.arbitrum,
    label: "Arbitrum",
    startContent: arbitrumLogo,
  },
  {
    value: L2OptionsEnum.optimism,
    label: "Optimism",
    startContent: optimismLogo,
  },
  {
    value: L2OptionsEnum.starknet,
    label: "Starknet",
    startContent: starknetLogo,
  },
  {
    value: L2OptionsEnum.zksyncEra,
    label: "ZkSync Era",
    startContent: zkSyncEraLogo,
  },
];
