import {
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
  Image,
  Spacer,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  EtherPriceQueryFn,
  GasOracleArbitrumPostFn,
  GasOracleOptimismPostFn,
  PriorityFeeEthereumPostFn,
  PriorityFeeOptimismPostFn,
} from "@/app/Query/QueryFunctions";
import CostCompareCardBody from "@/components/CostCompareCardBody";
import { GasActionItem, L2SelectItem, TotalGasFee } from "@/types";
import { refetchInterval } from "@/components/mainCard";
import { gasEstimatorItems, layer2Items } from "@/components/SelectContent";
import CostCompareCardFooter from "@/components/CostCompareCardFooter";
import { fromWei } from "@/components/utils/converter";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";

export default function CostCompareCard(props: { mainnetGasPrice: number }) {
  const arbitrumLogo = (
    <Image
      alt="arb logo"
      radius="sm"
      src="https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=029"
      width={25}
    />
  );
  const optimismLogo = (
    <Image
      alt="opt logo"
      radius="sm"
      src="https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg?v=029"
      width={25}
    />
  );

  const [selectedItem, setSelectedItem] = useState<any>("swap");
  const [selectedL2Logo, setSelectedL2Logo] = useState<any>(arbitrumLogo);
  const [selectedL2, setSelectedL2] = useState<any>("arbitrum");

  const etherPriceQuery = useQuery({
    queryKey: ["etherPriceUsd"],
    queryFn: EtherPriceQueryFn,
    enabled: true,
    refetchInterval: refetchInterval,
  });
  const ethereumPrioFeeQuery = useQuery({
    queryKey: ["ethereumPrioFeeWei"],
    queryFn: PriorityFeeEthereumPostFn,
    enabled: true,
    refetchInterval: refetchInterval,
  });
  const ethereumPrioPriceWei = ethereumPrioFeeQuery?.data?.result
    ? fromWei(ethereumPrioFeeQuery?.data?.result)
    : null;

  const selectedGasActionItem: GasActionItem | undefined =
    gasEstimatorItems.find((item) => {
      return item.value === selectedItem;
    });

  const arbitrumGasOracleQuery = useQuery({
    queryKey: ["arbitrumGasPriceGwei"],
    queryFn: GasOracleArbitrumPostFn,
    enabled: true,
    refetchInterval: refetchInterval,
  }); // Wei?
  const arbiGasPriceWei = arbitrumGasOracleQuery?.data?.result
    ? fromWei(arbitrumGasOracleQuery?.data?.result)
    : null;

  const optimismPrioFeeQuery = useQuery({
    queryKey: ["optimismPrioFeeWei"],
    queryFn: PriorityFeeOptimismPostFn,
    enabled: true,
    refetchInterval: refetchInterval,
  });
  const optimismPrioPriceWei = optimismPrioFeeQuery?.data?.result
    ? fromWei(optimismPrioFeeQuery?.data?.result)
    : null;

  const optimismGasPriceQuery = useQuery({
    queryKey: ["optimismGasPriceGwei"],
    queryFn: GasOracleOptimismPostFn,
    enabled: true,
    refetchInterval: refetchInterval,
  });
  const optimismGasPriceWei = optimismGasPriceQuery?.data?.result
    ? fromWei(optimismGasPriceQuery?.data?.result)
    : null;

  function handleLayer2Select(selectedItem: string): void {
    setSelectedL2(selectedItem);
    if (selectedItem == "optimism") {
      setSelectedL2Logo(optimismLogo);
    }
    if (selectedItem == "arbitrum") {
      setSelectedL2Logo(arbitrumLogo);
    }
  }

  function getLayer2GasPrice(selectedItem: string): TotalGasFee {
    if (selectedItem == "optimism") {
      // Base fee + prio fee
      const baseFee = optimismGasPriceWei ?? 0;
      const priorityFee = optimismPrioPriceWei ?? 0;
      return { baseFee: baseFee, priorityFee: priorityFee };
    }
    if (selectedItem == "arbitrum") {
      const baseFee = arbiGasPriceWei ?? 0;
      return { baseFee: baseFee, priorityFee: 0 };
    }
    return { baseFee: 0, priorityFee: 0 };
  }

  return (
      <Card className="mt-6">
        <Select
            items={gasEstimatorItems}
            label="Select transaction type"
            placeholder="Choose item"
            className="max-w-full p-2"
            defaultSelectedKeys={["swap"]}
            onChange={(selectedItem) => setSelectedItem(selectedItem.target.value)}
        >
          {(item: GasActionItem) => (
              <SelectItem key={item.value} startContent={item.startContent}>
                {item.label}
              </SelectItem>
          )}
        </Select>
        <Select
            items={layer2Items}
            label="Select L2"
            placeholder="Choose item"
            className="max-w-full p-2"
            defaultSelectedKeys={["arbitrum"]}
            onChange={(selectedItem) =>
                handleLayer2Select(selectedItem.target.value)
            }
        >
          {(item: L2SelectItem) => (
              <SelectItem key={item.value} startContent={item.startContent}>
                {item.label}
              </SelectItem>
          )}
        </Select>

        <div id="two-card-grid" className="grid grid-cols-2">
          <Card className="m-3">
            <CardHeader className="justify-center text-3xl">
              L1 <Spacer x={2}/>{" "}
              <Image
                  alt="ethereum logo"
                  radius="sm"
                  src="https://ethereum.org/de/_next/static/media/eth-diamond-rainbow.bb509e8a.png"
                  width={20}
              />
            </CardHeader>
            <CardBody>
              {selectedItem ? (
                  <CostCompareCardBody
                      gasPrice={{
                        baseFee: props.mainnetGasPrice,
                        priorityFee: ethereumPrioPriceWei ?? 0,
                      }}
                      selectedGasActionItem={selectedGasActionItem}
                      ethFractions={3}
                      fiatFractions={2}
                      ethPriceQuery={etherPriceQuery}
                  />
              ) : (
                  <div className="text-center">Please select an item.</div>
              )}
            </CardBody>
            <CostCompareCardFooter
                gasPrice={{
                  baseFee: props.mainnetGasPrice,
                  priorityFee: ethereumPrioPriceWei ?? 0,
                }}
            />
          </Card>
          <Card className="m-3">
            <CardHeader className="justify-center text-3xl">
              L2 <Spacer x={2}/>
              {selectedL2Logo}
            </CardHeader>
            <CardBody>
              {selectedItem ? (
                  <CostCompareCardBody
                      gasPrice={getLayer2GasPrice(selectedL2)}
                      selectedGasActionItem={selectedGasActionItem}
                      ethFractions={5}
                      fiatFractions={4}
                      ethPriceQuery={etherPriceQuery}
                  />
              ) : (
                  <div className="text-center">Please select an item.</div>
              )}
            </CardBody>
            <CostCompareCardFooter gasPrice={getLayer2GasPrice(selectedL2)}/>
          </Card>
        </div>
        <div className="text-center pb-4">
          <Popover>
            <PopoverTrigger>
              <div className="text-xs pl-2 underline decoration-dotted text-gray-400">
                How accurate is this?
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2 w-96">
                <div className="text-xs text-gray-400">
                  The L2 estimates currently don&apos;t contain the fee charged when writing the
                  rollup data to L1. This will change with EIP-4844.
                  <Spacer y={2}/>
                  The estimates are only indicative and supposed to highlight the difference between L1 and L2.
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </Card>
  );
}
