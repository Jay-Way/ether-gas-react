import {Card, CardBody, CardFooter, CardHeader, Select, SelectItem, Image, Spacer} from "@nextui-org/react";
import React, {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {EtherPriceQueryFn, GasOracleArbitrumPostFn, GasOracleOptimismPostFn} from "@/app/Query/QueryFunctions";
import CostCompareCardBody from "@/components/CostCompareCardBody";
import {Skeleton} from "@nextui-org/skeleton";
import {GasActionItem, L2SelectItem} from "@/types";
import {refetchInterval} from "@/components/mainCard";
import {gasEstimatorItems, layer2Items} from "@/components/SelectContent";

export default function CostCompareCard(props: {mainnetGasPrice: number}) {
    const arbitrumLogo = <Image alt="arb logo" radius="sm" src="https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=029" width={25}/>;
    const optimismLogo = <Image alt="opt logo" radius="sm" src="https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg?v=029" width={25} />;

    const [selectedItem, setSelectedItem] = useState<any>('swap');
    const [selectedL2Logo, setSelectedL2Logo] = useState<any>(arbitrumLogo);
    const [selectedL2, setSelectedL2] = useState<any>('arbitrum');

    const etherPriceQuery = useQuery({queryKey: ['etherPriceUsd'], queryFn: EtherPriceQueryFn, enabled: true, refetchInterval: refetchInterval});
    const selectedGasActionItem: GasActionItem | undefined = gasEstimatorItems.find((item) => {return item.value === selectedItem})
    const arbitrumGasOracleQuery = useQuery({queryKey: ['arbitrumGasPriceGwei'], queryFn: GasOracleArbitrumPostFn, enabled: true, refetchInterval: refetchInterval});
    const arbiGasPriceWei = arbitrumGasOracleQuery?.data?.result ? parseInt(arbitrumGasOracleQuery?.data?.result, 16) : null;

    const optimismGasPriceQuery = useQuery({queryKey: ['optimismGasPriceGwei'], queryFn: GasOracleOptimismPostFn, enabled: true, refetchInterval: refetchInterval});
    const optimismGasPriceWei = optimismGasPriceQuery?.data?.result ? parseInt(optimismGasPriceQuery?.data?.result, 16) : null;

    function handleLayer2Select(selectedItem: string): void {
        setSelectedL2(selectedItem)
        if (selectedItem == 'optimism') {
            setSelectedL2Logo(optimismLogo)
        }
        if (selectedItem == 'arbitrum') {
            setSelectedL2Logo(arbitrumLogo)
        }
    }

    function getLayer2GasPrice(selectedItem: string): number {
        if (selectedItem == 'optimism') {
            return (optimismGasPriceWei ?? 0) / 1000000000
        }
        if (selectedItem == 'arbitrum') {
            return (arbiGasPriceWei ?? 0) / 1000000000
        }
        return 0;
    }

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
                {(item: GasActionItem) => <SelectItem key={item.value} startContent={item.startContent}>
                    {item.label}
                </SelectItem>}
            </Select>
            <Select
                items={layer2Items}
                label="Select L2"
                placeholder="Choose item"
                className="max-w-full p-2"
                defaultSelectedKeys={['arbitrum']}
                onChange={(selectedItem) => handleLayer2Select(selectedItem.target.value)}
            >
                {(item: L2SelectItem) => <SelectItem key={item.value} startContent={item.startContent}>
                    {item.label}
                </SelectItem>}
            </Select>
            <p className="text-xs pl-2 pt-2 text-gray-400">
                Calculation done with the respective gas limit, meaning these are the maximum costs of the transaction. The specific gas limits are only thought to be an estimate and might be wrong.
            </p>
            <p className="text-xs pl-2 pt-2 text-gray-400">
                1ETH = ${etherPriceQuery.isLoading ? <Skeleton><div className="w-10 h-10"></div></Skeleton> : parseFloat(etherPriceQuery.data.result.ethusd).toFixed(2)}
            </p>
            <p className="text-xs pl-2 pt-2 text-yellow-100">Estimates are currently done without tips (Base fee only)!</p>
            <div id="two-card-grid" className="grid grid-cols-2 gap-2">
                <Card className="mt-6">
                    <CardHeader className="justify-center text-3xl">
                        L1 <Spacer x={2}/> <Image
                        alt="ethereum logo"
                        radius="sm"
                        src="https://ethereum.org/de/_next/static/media/eth-diamond-rainbow.bb509e8a.png"
                        width={20}
                    />
                    </CardHeader>
                    <CardBody>
                        {selectedItem ?
                            <CostCompareCardBody
                                gasPrice={props.mainnetGasPrice}
                                selectedGasActionItem={selectedGasActionItem}
                                ethFractions={3}
                                fiatFractions={2}
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
                        L2 <Spacer x={2}/>{selectedL2Logo}
                    </CardHeader>
                    <CardBody>
                        {selectedItem ?
                            <CostCompareCardBody
                                gasPrice={getLayer2GasPrice(selectedL2)}
                                selectedGasActionItem={selectedGasActionItem}
                                ethFractions={5}
                                fiatFractions={4}
                                ethPriceQuery={etherPriceQuery}
                            /> : <p className="text-center">Please select an item.</p>
                        }
                    </CardBody>
                    <CardFooter className="justify-center">
                        <div className=" text-xs text-gray-400">Estimated with {getLayer2GasPrice(selectedL2)} Gwei</div>
                    </CardFooter>
                </Card>
            </div>
        </Card>
    )
}
