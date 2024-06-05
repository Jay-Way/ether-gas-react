import {useEffect} from "react";
import {AggregatedFees} from "@/types";
import {useL2FeeQuery} from "@/app/Query/Queries";
import {CryptoStatsL2OptionsEnum, L2OptionsEnum} from "@/enums/enums";
import toast from "react-hot-toast";
import {zkSyncEraLogo} from "@/components/logos/logos";

export const useAggregatedFeesQuery = (setAggregatedL2FeesCallback: (aggregatedGasFees: AggregatedFees) => void) => {
    const [
        optimismTransferFeeQuery,
        optimismSwapFeeQuery,
        optimismErc20FeeQuery
    ] = useL2FeeQuery(CryptoStatsL2OptionsEnum.optimism);
    const [
        arbitrumTransferFeeQuery,
        arbitrumSwapFeeQuery,
        arbitrumErc20FeeQuery
    ] = useL2FeeQuery(CryptoStatsL2OptionsEnum.arbitrum);
    const [
        starknetTransferFeeQuery,
        starknetSwapFeeQuery,
        starknetErc20FeeQuery
    ] = useL2FeeQuery(CryptoStatsL2OptionsEnum.starknet);

    const [
        zksyncTransferFeeQuery,
        zksyncSwapFeeQuery,
        zksyncErc20FeeQuery
    ] = useL2FeeQuery(CryptoStatsL2OptionsEnum.zksyncEra);

    useEffect(() => {
            const aggregatedGasFees: AggregatedFees = {
                [L2OptionsEnum.arbitrum]: {
                    swap: arbitrumSwapFeeQuery.data,
                    transfer: arbitrumTransferFeeQuery.data,
                    erc20: arbitrumErc20FeeQuery.data,
                },
                [L2OptionsEnum.optimism]: {
                    swap: optimismSwapFeeQuery.data,
                    transfer: optimismTransferFeeQuery.data,
                    erc20: optimismErc20FeeQuery.data,
                },
                [L2OptionsEnum.starknet]: {
                    swap: starknetSwapFeeQuery.data,
                    transfer: starknetTransferFeeQuery.data,
                    erc20: starknetErc20FeeQuery.data,
                },
                [L2OptionsEnum.zksyncEra]: {
                    swap: zksyncSwapFeeQuery.data,
                    transfer: zksyncTransferFeeQuery.data,
                    erc20: zksyncErc20FeeQuery.data,
                }
            }
            setAggregatedL2FeesCallback(aggregatedGasFees)
        },
        [
            arbitrumErc20FeeQuery.data,
            arbitrumSwapFeeQuery.data,
            arbitrumTransferFeeQuery.data,
            optimismErc20FeeQuery.data,
            optimismSwapFeeQuery.data,
            optimismTransferFeeQuery.data,
            starknetTransferFeeQuery.data,
            starknetSwapFeeQuery.data,
            starknetErc20FeeQuery.data,
            zksyncTransferFeeQuery.data,
            zksyncSwapFeeQuery.data,
            zksyncErc20FeeQuery.data
        ]);

    useEffect(() => {
        // Only one error for now, as only this query fails
            zksyncSwapFeeQuery.error ? toast.error(
                'Error while fetching price for swap on ZkSync Era.',
                {
                    icon: zkSyncEraLogo,
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#df5858',
                    },
                }
            ) : null;
        },
        [
            arbitrumErc20FeeQuery.error,
            arbitrumSwapFeeQuery.error,
            arbitrumTransferFeeQuery.error,
            optimismErc20FeeQuery.error,
            optimismSwapFeeQuery.error,
            optimismTransferFeeQuery.error,
            starknetTransferFeeQuery.error,
            starknetSwapFeeQuery.error,
            starknetErc20FeeQuery.error,
            zksyncTransferFeeQuery.error,
            zksyncSwapFeeQuery.error,
            zksyncErc20FeeQuery.error
        ]);
}