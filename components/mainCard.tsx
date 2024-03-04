import React from "react";
import { ThemeSwitch } from "@/components/theme-switch";
import { Card } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { BaseFeeEthereumPostFn } from "@/app/Query/QueryFunctions";
import { Skeleton } from "@nextui-org/skeleton";
import L2ExplanationAccordion from "@/components/L2ExplanationAccordion";
import CostCompareCard from "@/components/CostCompareCard";
import L2OnboardingAccordion from "@/components/L2OnboardingAccordion";
import GasExplanationCard from "@/components/GasExplanationCard";
import GasPriceCard from "@/components/GasPriceCard";
import AboutFooter from "@/components/AboutFooter";
import { fromWei } from "@/components/utils/converter";
export const refetchInterval = 30000;

export default function MainCard() {
  const ethereumBaseFeeQuery = useQuery({
    queryKey: ["ethereumBaseFee"],
    queryFn: BaseFeeEthereumPostFn,
    enabled: true,
    refetchInterval: refetchInterval,
  });

  const cardSkeleton = (
    <Card className="space-y-5 p-4 mt-4" radius="lg">
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
    </Card>
  );

  const cardSkeletonDiv = (
    <div className="grid grid-cols-2 gap-2">
      {cardSkeleton}
      {cardSkeleton}
    </div>
  );

  return (
    <>
      <div className="relative p-4 sm:rounded-2xl bg-[#222429] shadow-lg max-w-2xl">
        <ThemeSwitch className="absolute top-0 right-0 p-4" />
        <div className="text-3xl text-gray-200">
          Why is my Ethereum transaction so expensive?
        </div>
        <GasPriceCard gasOracleQuery={ethereumBaseFeeQuery} />
        <GasExplanationCard />
        {!ethereumBaseFeeQuery.isLoading ? (
          <CostCompareCard
            mainnetGasPrice={fromWei(ethereumBaseFeeQuery?.data.result)}
          />
        ) : (
          cardSkeletonDiv
        )}
        <L2ExplanationAccordion />
        <L2OnboardingAccordion />
        <AboutFooter />
      </div>
    </>
  );
}
