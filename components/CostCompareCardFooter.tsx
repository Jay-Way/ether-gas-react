import { CardFooter } from "@nextui-org/react";
import React from "react";
import { TotalGasFee } from "@/types";

export default function CostCompareCardFooter(props: {
  gasPrice: TotalGasFee;
}) {
  return (
    <CardFooter className="text-center">
      <div className=" text-xs text-gray-400">
        Estimated with {props.gasPrice.baseFee} GWei (Base fee) and{" "}
        {props.gasPrice.priorityFee} GWei (Priority Fee)
      </div>
    </CardFooter>
  );
}
