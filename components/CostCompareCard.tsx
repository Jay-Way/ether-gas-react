import {Card, Spacer} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import {AggregatedFees, GasActionItem} from "@/types";
import {gasEstimatorItems} from "@/components/SelectContent";
import {fromWei} from "@/components/utils/converter";
import GasCostCard from "@/components/GasCostCard";
import {arbitrumLogo, ethereumLogo, optimismLogo, starknetLogo, zkSyncEraLogo} from "@/components/logos/logos";
import DisclaimerPopover from "@/components/DisclaimerPopover";
import EstimationSelects from "@/components/EstimationSelects";
import {useEthereumPrioFeeQuery, useEtherPriceQuery, useL2FeeQuery} from "@/app/Query/Queries";
import {useTranslation} from "react-i18next";
import {L2OptionsEnum, TransferTypeOptionsEnum} from "@/enums/enums";
import {useAggregatedFeesQuery} from "@/app/Query/QueryHooks";

export default function CostCompareCard(props: { mainnetGasPrice: number }) {
  const [selectedItem, setSelectedItem] = useState<TransferTypeOptionsEnum>(TransferTypeOptionsEnum.swap);
  const [selectedL2, setSelectedL2] = useState<L2OptionsEnum>(L2OptionsEnum.arbitrum);
  const [aggregatedL2Fees, setAggregatedL2Fees] = useState<AggregatedFees>();
  const {t} = useTranslation();

  const etherPriceQuery = useEtherPriceQuery();
  useAggregatedFeesQuery(setAggregatedL2Fees);

  const ethereumPrioFeeQuery = useEthereumPrioFeeQuery();
  const ethereumPrioPriceWei = ethereumPrioFeeQuery?.data?.result
    ? fromWei(ethereumPrioFeeQuery?.data?.result)
    : null;

  const selectedGasActionItem: GasActionItem | undefined =
    gasEstimatorItems.find((item) => {
      return item.value === selectedItem;
    });

  const L2Logos = {
    [L2OptionsEnum.arbitrum]: arbitrumLogo,
    [L2OptionsEnum.optimism]: optimismLogo,
    [L2OptionsEnum.starknet]: starknetLogo,
    [L2OptionsEnum.zksyncEra]: zkSyncEraLogo,
  }

  const requiredGas = selectedGasActionItem?.requiredGas ?? 0;
  const ethereumTotalGasFee = (props.mainnetGasPrice + (ethereumPrioPriceWei ?? 0));
  const etherPrice = etherPriceQuery.isLoading ? 0 : etherPriceQuery?.data.result.ethusd;

  return (
      <Card className="mt-6">
        <EstimationSelects setSelectedItem={setSelectedItem} setSelectedL2={setSelectedL2}/>
        <div id="two-card-grid" className="sm:grid grid-cols-2">
          <GasCostCard
              selectedGasActionItem={selectedGasActionItem}
              headerText={'L1'}
              footerText={t('gasCompareCard.estimationHintL1', {gasFee: ethereumTotalGasFee.toFixed(2)})}
              headerLogo={ethereumLogo}
              gasPriceETH={((ethereumTotalGasFee * requiredGas) / Math.pow(10, 9))}
              gasPriceFiat={((ethereumTotalGasFee * requiredGas) * etherPrice) / Math.pow(10, 9)}
              ethFractions={4}
              fiatFractions={2}
          />
          <GasCostCard
              selectedGasActionItem={selectedGasActionItem}
              headerText={'L2'}
              footerText={t('gasCompareCard.estimationHintL2')}
              headerLogo={L2Logos[selectedL2]}
              gasPriceETH={(aggregatedL2Fees ? aggregatedL2Fees[selectedL2][selectedItem] : 0) / etherPrice}
              gasPriceFiat={(aggregatedL2Fees ? aggregatedL2Fees[selectedL2][selectedItem] : 0)}
              ethFractions={5}
              fiatFractions={5}
          />
        </div>
        <DisclaimerPopover/>
      </Card>
  );
}
