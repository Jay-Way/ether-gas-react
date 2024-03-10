import {useQuery} from "@tanstack/react-query";
import {
    EtherPriceQueryFn,
    GetCryptoStatsFeeEstimation,
    PriorityFeeEthereumPostFn
} from "@/app/Query/QueryFunctions";
import {refetchInterval} from "@/components/mainCard";

export const useEthereumPrioFeeQuery = () => {
    return useQuery({
        queryKey: ["ethereumPrioFeeWei"],
        queryFn: PriorityFeeEthereumPostFn,
        enabled: true,
        refetchInterval: refetchInterval,
    });
};

export const useOptimismL2UsdTransferErc20Query = () => {
    return useQuery({
        queryKey: ["optimismFeeTransferErc20Usd"],
        queryFn: () => GetCryptoStatsFeeEstimation('feeTransferERC20', 'optimistic-ethereum'),
        enabled: true,
        refetchInterval: refetchInterval,
    });
};

export const useOptimismL2UsdFeeQuery = () => {
    return useQuery({
        queryKey: ["optimismFeeTransferUsd"],
        queryFn: () => GetCryptoStatsFeeEstimation('feeTransferEth', 'optimistic-ethereum'),
        enabled: true,
        refetchInterval: refetchInterval,
    });
};

export const useOptimismL2UsdFeeSwapQuery = () => {
    return useQuery({
        queryKey: ["optimismFeeSwapUsd"],
        queryFn: () => GetCryptoStatsFeeEstimation('feeSwap', 'optimistic-ethereum'),
        enabled: true,
        refetchInterval: refetchInterval,
    });
};

export const useArbitrumL2UsdTransferErc20Query = () => {
    return useQuery({
        queryKey: ["arbitrumFeeTransferErc20Usd"],
        queryFn: () => GetCryptoStatsFeeEstimation('feeTransferERC20', 'arbitrum-one'),
        enabled: true,
        refetchInterval: refetchInterval,
    });
};

export const useArbitrumL2UsdFeeQuery = () => {
    return useQuery({
        queryKey: ["arbitrumFeeTransferUsd"],
        queryFn: () => GetCryptoStatsFeeEstimation('feeTransferEth', 'arbitrum-one'),
        enabled: true,
        refetchInterval: refetchInterval,
    });
};

export const useArbitrumL2UsdFeeSwapQuery = () => {
    return useQuery({
        queryKey: ["arbitrumFeeSwapUsd"],
        queryFn: () => GetCryptoStatsFeeEstimation('feeSwap', 'arbitrum-one'),
        enabled: true,
        refetchInterval: refetchInterval,
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