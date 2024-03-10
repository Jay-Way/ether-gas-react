import React from "react";
import { useQuery } from "@tanstack/react-query";
import { BaseFeeEthereumPostFn } from "@/app/Query/QueryFunctions";
import L2ExplanationAccordion from "@/components/L2ExplanationAccordion";
import CostCompareCard from "@/components/CostCompareCard";
import L2OnboardingAccordion from "@/components/L2OnboardingAccordion";
import GasExplanationCard from "@/components/GasExplanationCard";
import GasPriceCard from "@/components/GasPriceCard";
import AboutFooter from "@/components/AboutFooter";
import { fromWei } from "@/components/utils/converter";
import {useTranslation} from "react-i18next";
import {cardSkeletonDiv} from "@/components/Skeletons/Skeletons";
import NavbarHeader from "@/components/NavbarHeader";
export const refetchInterval = 30000;

export default function MainCard() {
  const ethereumBaseFeeQuery = useQuery({
    queryKey: ["ethereumBaseFee"],
    queryFn: BaseFeeEthereumPostFn,
    enabled: true,
    refetchInterval: refetchInterval,
  });

  const {t} = useTranslation();
  return (
    <>
      <NavbarHeader />
      <div className="p-4 sm:rounded-2xl bg-[#222429] shadow-lg max-w-2xl">
        <div className="text-3xl text-gray-200">
          {t('title')}
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
