import {useQueries, useQuery} from "@tanstack/react-query";
import {
    EtherPriceQueryFn,
    GetCryptoStatsFeeEstimation,
    PriorityFeeEthereumPostFn
} from "@/app/Query/QueryFunctions";
import {refetchInterval} from "@/components/mainCard";
import {CryptoStatsL2OptionsEnum, CryptoStatsQueriesEnum} from "@/enums/enums";

export const useEthereumPrioFeeQuery = () => {
    return useQuery({
        queryKey: ["ethereumPrioFeeWei"],
        queryFn: PriorityFeeEthereumPostFn,
        enabled: true,
        refetchInterval: refetchInterval,
    });
};

export const useL2FeeQuery = (network: CryptoStatsL2OptionsEnum) => {
    return useQueries({
        queries: [
            {
                queryFn: () => GetCryptoStatsFeeEstimation(CryptoStatsQueriesEnum.transfer, network),
                queryKey: [network + '-' + CryptoStatsQueriesEnum.transfer],
                enabled: true,
                refetchInterval: refetchInterval,
            },
            {
                queryFn: () => GetCryptoStatsFeeEstimation(CryptoStatsQueriesEnum.swap, network),
                queryKey: [network + '-' + CryptoStatsQueriesEnum.swap],
                enabled: true,
                refetchInterval: refetchInterval,
            },
            {
                queryFn: () => GetCryptoStatsFeeEstimation(CryptoStatsQueriesEnum.erc20, network),
                queryKey: [network+ '-' + CryptoStatsQueriesEnum.erc20],
                enabled: true,
                refetchInterval: refetchInterval,
            },
        ],
    });
};

export const useEtherPriceQuery = () => {
    return useQuery({
        queryKey: ["etherPriceUsd"],
        queryFn: EtherPriceQueryFn,
        enabled: true,
        refetchInterval: refetchInterval,
    });
};