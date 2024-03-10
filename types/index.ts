import {SVGProps} from "react";

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
  arbitrum: GasFees,
  optimism: GasFees
}

export type L2Options = 'arbitrum' | 'optimism'
export type TransferTypeOptions = 'swap' | 'transfer' | 'erc20'