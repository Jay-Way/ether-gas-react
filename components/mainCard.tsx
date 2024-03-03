import React from "react";
import {ThemeSwitch} from "@/components/theme-switch";
import {Card, CardBody, CardFooter, CardHeader, Image, Spacer, Switch} from "@nextui-org/react";
import {useQuery} from "@tanstack/react-query";
import {GasOracleQueryFn} from "@/app/Query/QueryFunctions";
import {Skeleton} from "@nextui-org/skeleton";
import AccordionCard from "@/components/AccordionCard";
import CostCompareCard from "@/components/CostCompareCard";

export default function MainCard() {
    const gasOracleQuery = useQuery({queryKey: ['gasPriceGwei'], queryFn: GasOracleQueryFn, enabled: true, refetchInterval: 5000});
    const cardSkeleton = <Card className="space-y-5 p-4 mt-4" radius="lg">
        <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
        </div>
    </Card>;

    const cardSkeletonDiv = <div className="grid grid-cols-2 gap-2">
        {cardSkeleton}
        {cardSkeleton}
    </div>

        return (
        <>
            <div className="relative p-4 rounded-2xl bg-gradient-to-tr from-pink-500 to-yellow-500 shadow-lg max-w-2xl">
                <ThemeSwitch className="absolute top-0 right-0 p-4"/>
                <p className="text-4xl">Why is my Ethereum transaction so expensive? 💸 (WIP)</p>
                <Card className="mt-6">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="ethereum logo"
                            radius="sm"
                            src="https://ethereum.org/de/_next/static/media/eth-diamond-rainbow.bb509e8a.png"
                            width={20}
                        />
                        <div className="">
                            <span className="text-xs text-default-500">Data from etherscan.io / arbiscan.io</span>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p className="text-2xl">
                            L1 Gas price is at <div className="inline text-4xl text-gray-600">{gasOracleQuery.data?.result.SafeGasPrice}</div> GWei
                            right now.
                        </p>
                        <p className="text-2xl">You should probably use a L2!</p>
                    </CardBody>
                    <CardFooter>
                        <div className="text-xl">
                            WTF does that even mean?
                        </div>
                    </CardFooter>
                </Card>
                <Card className=" mt-6">
                    <CardBody>
                        <p className="text-xl">Every transaction on Ethereum consumes a specific amount of computing power,
                            called <strong>gas</strong>.</p>
                        <Spacer y={8}/>
                        <p className="text-large">The gas limit, multiplied by the current gas price results in the maximum cost of your tx. Keep in mind that usually not all of the gas is used.</p>
                        <Spacer y={8}/>
                        <p className="text-large">That means <strong>depending on what you&apos;re doing your expected fee varies.</strong></p>
                        <Spacer y={8}/>
                        <p className="text-large">But usually you can <strong>save money by using a Layer 2!</strong></p>
                        <p className="text-large">Check out at these examples:</p>
                    </CardBody>
                </Card>
                { !gasOracleQuery.isLoading ? <CostCompareCard mainnetGasPrice={gasOracleQuery?.data.result.SafeGasPrice} /> : cardSkeletonDiv}
                <AccordionCard />
                <p className="mt-4 text-xs text-center text-gray-500">Made with Next.js, Next-UI, TanStack and Typescript. Deployed via cloudfront + s3</p>
            </div>
        </>
    );
}