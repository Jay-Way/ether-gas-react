import { Card } from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import {AggregatedFees, GasActionItem, L2Options, TransferTypeOptions} from "@/types";
import { gasEstimatorItems } from "@/components/SelectContent";
import { fromWei } from "@/components/utils/converter";
import GasCostCard from "@/components/GasCostCard";
import {arbitrumLogo, ethereumLogo, optimismLogo} from "@/components/logos/logos";
import DisclaimerPopover from "@/components/DisclaimerPopover";
import EstimationSelects from "@/components/EstimationSelects";
import {
  useArbitrumL2UsdFeeQuery,
  useArbitrumL2UsdFeeSwapQuery,
  useArbitrumL2UsdTransferErc20Query,
  useEthereumPrioFeeQuery,
  useEtherPriceQuery,
  useOptimismL2UsdFeeQuery,
  useOptimismL2UsdFeeSwapQuery,
  useOptimismL2UsdTransferErc20Query
} from "@/app/Query/Queries";
import {useTranslation} from "react-i18next";

export default function CostCompareCard(props: { mainnetGasPrice: number }) {
  const [selectedItem, setSelectedItem] = useState<TransferTypeOptions>("swap");
  const [selectedL2, setSelectedL2] = useState<L2Options>("arbitrum");
  const [aggregatedL2Fees, setAggregatedL2Fees] = useState<AggregatedFees>();
  const {t} = useTranslation();

  const etherPriceQuery = useEtherPriceQuery();
  const arbitrumL2UsdFeeSwapQuery = useArbitrumL2UsdFeeSwapQuery();
  const arbitrumL2UsdFeeQuery = useArbitrumL2UsdFeeQuery();
  const arbitrumL2UsdTransferErc20Query = useArbitrumL2UsdTransferErc20Query();
  const optimismL2UsdFeeSwapQuery = useOptimismL2UsdFeeSwapQuery();
  const optimismL2UsdFeeQuery = useOptimismL2UsdFeeQuery();
  const optimismL2UsdTransferErc20Query = useOptimismL2UsdTransferErc20Query();
  const ethereumPrioFeeQuery = useEthereumPrioFeeQuery();

  const ethereumPrioPriceWei = ethereumPrioFeeQuery?.data?.result
    ? fromWei(ethereumPrioFeeQuery?.data?.result)
    : null;

  const selectedGasActionItem: GasActionItem | undefined =
    gasEstimatorItems.find((item) => {
      return item.value === selectedItem;
    });

  useEffect(() => {
    const aggregatedGasFees: AggregatedFees = {
      arbitrum: {
        swap: arbitrumL2UsdFeeSwapQuery.data,
        transfer: arbitrumL2UsdFeeQuery.data,
        erc20: arbitrumL2UsdTransferErc20Query.data,
      },
      optimism: {
        swap: optimismL2UsdFeeSwapQuery.data,
        transfer: optimismL2UsdFeeQuery.data,
        erc20: optimismL2UsdTransferErc20Query.data,
      }
    }
    setAggregatedL2Fees(aggregatedGasFees)
  }, [
    arbitrumL2UsdFeeSwapQuery.isLoading,
    arbitrumL2UsdFeeQuery.isLoading,
    arbitrumL2UsdTransferErc20Query.isLoading,
    optimismL2UsdFeeSwapQuery.isLoading,
    optimismL2UsdFeeQuery.isLoading,
    optimismL2UsdTransferErc20Query.isLoading,
  ]);

  const L2Logos = {
    arbitrum: arbitrumLogo,
    optimism: optimismLogo,
  }

  const requiredGas = selectedGasActionItem?.requiredGas ?? 0;
  const ethereumTotalGasFee = (props.mainnetGasPrice + (ethereumPrioPriceWei ?? 0));
  const etherPrice = etherPriceQuery.isLoading ? 0 : etherPriceQuery?.data.result.ethusd;

  return (
      <Card className="mt-6">
        <EstimationSelects setSelectedItem={setSelectedItem} setSelectedL2={setSelectedL2} />
        <div id="two-card-grid" className="sm:grid grid-cols-2">
          <GasCostCard
              selectedGasActionItem={selectedGasActionItem}
              headerText={'L1'}
              footerText={t('gasCompareCard.estimationHintL1', {gasFee: ethereumTotalGasFee.toFixed(2)})}
              headerLogo={ethereumLogo}
              gasPriceETH={((ethereumTotalGasFee * requiredGas) / Math.pow(10, 9))}
              gasPriceFiat={((ethereumTotalGasFee * requiredGas) * etherPrice) / Math.pow(10, 9) }
          />
          <GasCostCard
              selectedGasActionItem={selectedGasActionItem}
              headerText={'L2'}
              footerText={t('gasCompareCard.estimationHintL2')}
              headerLogo={L2Logos[selectedL2]}
              gasPriceETH={(aggregatedL2Fees ? aggregatedL2Fees[selectedL2][selectedItem] : 0) / etherPrice}
              gasPriceFiat={(aggregatedL2Fees ? aggregatedL2Fees[selectedL2][selectedItem] : 0)}
          />
        </div>
        <DisclaimerPopover/>
      </Card>
  );
}
