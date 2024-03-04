import { CardBody } from "@nextui-org/react";
import React from "react";
import { Code } from "@nextui-org/code";
import { Skeleton } from "@nextui-org/skeleton";
import { GasActionItem, TotalGasFee } from "@/types";
import { UseQueryResult } from "@tanstack/react-query";

export default function CostCompareCardBody(props: {
  gasPrice: TotalGasFee;
  selectedGasActionItem: GasActionItem | undefined;
  ethFractions: number;
  fiatFractions: number;
  ethPriceQuery: UseQueryResult<any>;
}) {
  if (props.ethPriceQuery.isLoading) {
    return (
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
    );
  }
  const etherPrice = props.ethPriceQuery?.data.result.ethusd;
  const totalFee =
    Number.parseFloat(props.gasPrice.baseFee.toString()) +
    props.gasPrice.priorityFee;
  const requiredGas = props.selectedGasActionItem?.requiredGas ?? 0;

  return (
    <CardBody>
      {props.selectedGasActionItem ? (
        <div className="text-center">
          <p>Expected cost: </p>
          <div className="inline-block">
            <Code className="text-xs">
              ({props.gasPrice.baseFee} + {props.gasPrice.priorityFee}) *{" "}
              {requiredGas} =
            </Code>
          </div>
          <div className="text-3xl bg-gradient-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            {((totalFee * requiredGas) / Math.pow(10, 9)).toFixed(
              props.ethFractions,
            )}{" "}
            ETH
          </div>
          <div className="text-small text-gray-400">or</div>
          <div>
            $
            {(
              ((totalFee * requiredGas) / Math.pow(10, 9)) *
              etherPrice
            ).toFixed(props.fiatFractions)}
          </div>
        </div>
      ) : (
        <p className="text-center">Please select an item.</p>
      )}
    </CardBody>
  );
}
