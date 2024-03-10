import {Card, CardBody, CardFooter, CardHeader, Spacer} from "@nextui-org/react";
import React from "react";
import { GasActionItem } from "@/types";

export default function GasCostCard(props: {
  selectedGasActionItem: GasActionItem | undefined;
  headerText: string;
  footerText: string;
  headerLogo: JSX.Element;
  gasPriceETH: number;
  gasPriceFiat: number|undefined;
}) {
  return (
      <Card className="m-3">
        <CardHeader className="justify-center text-3xl">
          {props.headerText} <Spacer x={2}/>
          {props.headerLogo}
        </CardHeader>
        <CardBody>
          {props.selectedGasActionItem ? (
              <div className="text-center">
                <div>Expected cost: </div>
                <div className="text-3xl bg-gradient-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                  {props.gasPriceETH.toFixed(5)} ETH
                </div>
                <div className="text-small text-gray-400">or</div>
                <div>
                  $
                  {props.gasPriceFiat ? props.gasPriceFiat.toFixed(2) : 0}
                </div>
              </div>
          ) : (
              <div className="text-center">Please select an item.</div>
          )}
        </CardBody>
          <CardFooter className="justify-center text-xs text-gray-400">
              {props.footerText}
          </CardFooter>
      </Card>
  );
}
