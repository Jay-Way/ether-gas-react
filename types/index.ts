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