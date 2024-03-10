import {Select, SelectItem} from "@nextui-org/react";
import {gasEstimatorItems, layer2Items} from "@/components/SelectContent";
import {GasActionItem, L2Options, L2SelectItem} from "@/types";
import React from "react";
import {useTranslation} from "react-i18next";

export default function EstimationSelects(props: { setSelectedItem: any,  setSelectedL2: (selectedItem: L2Options) => void}) {
    const {t} = useTranslation();
    return (
        <>
            <Select
                items={gasEstimatorItems}
                label={t('estimationSelects.selectTransactionType')}
                placeholder={t('estimationSelects.chooseItemPlaceholder')}
                className="max-w-full p-2"
                defaultSelectedKeys={["swap"]}
                onChange={(selectedItem) => props.setSelectedItem(selectedItem.target.value)}
            >
                {(item: GasActionItem) => (
                    <SelectItem key={item.value} startContent={item.startContent}>
                        {t(item.label)}
                    </SelectItem>
                )}
            </Select>
            <Select
                items={layer2Items}
                label={t('estimationSelects.selectL2')}
                placeholder={t('estimationSelects.chooseItemPlaceholder')}
                className="max-w-full p-2"
                defaultSelectedKeys={["arbitrum"]}
                onChange={(selectedItem) =>
                    props.setSelectedL2(selectedItem.target.value != '' ? selectedItem.target.value as L2Options : 'arbitrum')
                }
            >
                {(item: L2SelectItem) => (
                    <SelectItem key={item.value} startContent={item.startContent}>
                        {item.label}
                    </SelectItem>
                )}
            </Select>
        </>
    )
}
