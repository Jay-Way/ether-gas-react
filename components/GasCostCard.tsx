import {Card, CardBody, CardFooter, CardHeader, Spacer} from "@nextui-org/react";
import React from "react";
import { GasActionItem } from "@/types";
import {useTranslation} from "react-i18next";

export default function GasCostCard(props: {
  selectedGasActionItem: GasActionItem | undefined;
  headerText: string;
  footerText: string;
  headerLogo: JSX.Element;
  gasPriceETH: number|undefined;
  gasPriceFiat: number|undefined;
  infoChip?: JSX.Element|undefined;
}) {
  const {t} = useTranslation();
  return (
      <div>
          <Card className="m-3">
              <CardHeader className="justify-center text-3xl">
                  {props.headerText} <Spacer x={2}/>
                  {props.headerLogo}
              </CardHeader>
              <CardBody>
                  {props.selectedGasActionItem ? (
                      <div className="text-center">
                          {t('gasCompareCard.expectedCost')}
                          <div className="text-3xl bg-gradient-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                              {props.gasPriceETH ? props.gasPriceETH.toFixed(6) : 0} ETH
                          </div>
                          <div className="text-small text-gray-400">or</div>
                          <div>
                              $
                              {props.gasPriceFiat ? props.gasPriceFiat.toFixed(4) : 0}
                          </div>
                          <div className="pt-2">
                              {props.infoChip ? props.infoChip : <Spacer y={5}/> }
                          </div>
                      </div>
                  ) : (
                      <div className="text-center">
                          {t('common.selectItem')}
                      </div>
                  )}
              </CardBody>
              <CardFooter className="justify-center text-xs text-gray-400">
                  {props.footerText}
              </CardFooter>
          </Card>
      </div>
  );
}
