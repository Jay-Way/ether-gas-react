import {Avatar, Card, CardBody, CardFooter, CardHeader, Select, SelectItem, Image} from "@nextui-org/react";
import React, {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {EtherPriceQueryFn, GasOracleArbitrumQueryFn} from "@/app/Query/QueryFunctions";
import CostCompareCardBody from "@/components/CostCompareCardBody";
import {Skeleton} from "@nextui-org/skeleton";
import {GasActionItem} from "@/types";

export default function CostCompareCard(props: {mainnetGasPrice: number}) {
    const [selectedItem, setSelectedItem] = useState('swap');
    const gasEstimatorItems: Array<GasActionItem> = [
        {value: 'swap', label: 'Token swap (Uniswap)', requiredGas: 226228, startContent: <Image alt="eth logo" radius="sm" src="uniswap-uni-logo.svg" width={25} />},
        {value: 'transfer', label: 'Simple ETH transfer', requiredGas: 21000, startContent: <Image alt="eth logo" radius="sm" src="https://ethereum.org/de/_next/static/media/eth-diamond-rainbow.bb509e8a.png" width={25} />},
        {value: 'nft', label: 'NFT Sale', requiredGas: 601953, startContent: <Avatar name="NFT"/>},
        {value: 'erc20', label: 'ERC-20 transfer', requiredGas: 65000, startContent: <Avatar name="ERC-20"/>},
    ]

    const etherPriceQuery = useQuery({queryKey: ['etherPriceUsd'], queryFn: EtherPriceQueryFn, enabled: true, refetchInterval: 5000});
    const selectedGasActionItem = gasEstimatorItems.find((item) => {return item.value === selectedItem})
    const arbitrumGasOracleQuery = useQuery({queryKey: ['arbiGasPriceGwei'], queryFn: GasOracleArbitrumQueryFn, enabled: true, refetchInterval: 5000});
    const arbiGasPriceWei = arbitrumGasOracleQuery?.data?.result ? parseInt(arbitrumGasOracleQuery?.data?.result, 16) : null;

    return (
        <Card className="mt-6">
            <Select
                items={gasEstimatorItems}
                label="Select transaction type"
                placeholder="Choose item"
                className="max-w-full p-2"
                defaultSelectedKeys={['swap']}
                onChange={(selectedItem) => setSelectedItem(selectedItem.target.value)}
            >
                {(item) => <SelectItem key={item.value} startContent={item.startContent}>
                    {item.label}
                </SelectItem>}
            </Select>
            <p className="text-xs pl-2 pt-2 text-gray-400">Calculation done with the respective gas limit, meaning these are the maximum costs of the transaction. The specific gas limits are only thought to be an estimate and might be wrong.</p>
            <p className="text-xs pl-2 pt-2 text-gray-400">1ETH = ${etherPriceQuery.isLoading ? <Skeleton><div className="w-10 h-10"></div></Skeleton> : parseFloat(etherPriceQuery.data.result.ethusd).toFixed(2)}</p>
            <div id="two-card-grid" className="grid grid-cols-2 gap-2">
                <Card className="mt-6">
                    <CardHeader className="justify-center text-3xl">L1</CardHeader>
                    <CardBody>
                        {selectedItem ?
                            <CostCompareCardBody
                                gasPrice={props.mainnetGasPrice}
                                selectedGasActionItem={selectedGasActionItem}
                                ethFractions={3}
                                ethPriceQuery={etherPriceQuery}
                            /> : <p className="text-center">Please select an item.</p>
                        }
                    </CardBody>
                    <CardFooter className="justify-center">
                        <div className="text-xs text-gray-400">Estimated with {(props.mainnetGasPrice.toString())} Gwei</div>
                    </CardFooter>
                </Card>
                <Card className="mt-6">
                    <CardHeader className="justify-center text-3xl">
                        L2
                    </CardHeader>
                    <CardBody>
                        {selectedItem ?
                            <CostCompareCardBody
                                gasPrice={(arbiGasPriceWei ?? 0) / 1000000000}
                                selectedGasActionItem={selectedGasActionItem}
                                ethFractions={5}
                                ethPriceQuery={etherPriceQuery}
                            /> : <p className="text-center">Please select an item.</p>
                        }
                    </CardBody>
                    <CardFooter className="justify-center">
                        <div className=" text-xs text-gray-400">Estimated with {((arbiGasPriceWei ?? 0) / 1000000000)} Gwei (Arbitrum)</div>
                    </CardFooter>
                </Card>
            </div>
        </Card>
    )
}
