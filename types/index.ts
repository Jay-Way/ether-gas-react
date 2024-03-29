import {SVGProps} from "react";
import {L2OptionsEnum} from "@/enums/enums";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface GasActionItem {
  value: string,
  label: string,
  requiredGas: number,
  startContent: any
}

export interface L2SelectItem {
  value: string,
  label: string,
  startContent: any
}

interface GasFees {
  swap: number,
  transfer: number,
  erc20: number,
}

export interface AggregatedFees {
  [L2OptionsEnum.arbitrum]: GasFees,
  [L2OptionsEnum.optimism]: GasFees,
  [L2OptionsEnum.starknet]: GasFees,
  [L2OptionsEnum.zksyncEra]: GasFees,
}