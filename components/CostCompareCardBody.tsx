import {CardBody} from "@nextui-org/react";
import React from "react";
import {Code} from "@nextui-org/code";
import {Skeleton} from "@nextui-org/skeleton";
import {GasActionItem} from "@/types";
import {UseQueryResult} from "@tanstack/react-query";

export default function CostCompareCardBody(props: {gasPrice: number, selectedGasActionItem: GasActionItem|undefined, ethFractions: number, ethPriceQuery: UseQueryResult<any>}) {
    if (props.ethPriceQuery.isLoading) {
        return <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
    }
    const etherPrice = props.ethPriceQuery?.data.result.ethusd;
    return (
        <CardBody>
            {
                props.selectedGasActionItem ?
                    <div className="text-center">
                        <p>Expected cost: </p>
                        <div className="inline-block">
                            <Code
                                className="text-xs">{props.gasPrice} * {props.selectedGasActionItem.requiredGas} =
                            </Code>
                        </div>
                        <div className="text-4xl">
                            {((props.gasPrice * props.selectedGasActionItem.requiredGas) / Math.pow(10, 9)).toFixed(props.ethFractions)} ETH
                        </div>
                        <div className="text-small text-gray-400">or</div>
                        <div>
                            ${((props.gasPrice * props.selectedGasActionItem.requiredGas) / Math.pow(10, 9) * etherPrice).toFixed(2)}
                        </div>
                    </div>
                    : <p className="text-center">Please select an item.</p>
            }
        </CardBody>
    );
}
