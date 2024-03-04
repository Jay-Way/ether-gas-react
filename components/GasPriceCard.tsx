import {Card, CardBody, CardHeader, Image, Spacer, Spinner} from "@nextui-org/react";
import React from "react";
import {UseQueryResult} from "@tanstack/react-query";
import {refetchInterval} from "@/components/mainCard";

export default function GasPriceCard(props: {gasOracleQuery: UseQueryResult<any>}) {
    return (
        <Card className="mt-6">
            <CardHeader className="flex gap-3">
                <Image
                    alt="ethereum logo"
                    radius="sm"
                    src="https://ethereum.org/de/_next/static/media/eth-diamond-rainbow.bb509e8a.png"
                    width={20}
                />
                <div className="">
                    <span className="text-xs text-default-500">Data from etherscan.io / Alchemy.</span>
                    <p className="text-xs text-default-500">Updates every {refetchInterval / 1000}s</p>
                </div>
            </CardHeader>
            <CardBody>
                <p className="text-2xl">
                    L1 Gas price is at <div
                    className="inline text-4xl bg-gradient-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">{props.gasOracleQuery.isLoading ?
                    <Spinner color="default" labelColor="foreground"/> : props.gasOracleQuery.data?.result.ProposeGasPrice} Gwei </div>
                    right now.
                </p>
                <Spacer y={8}/>
                <p className="text-2xl">You should use a L2!</p>
            </CardBody>
        </Card>
    )
}
