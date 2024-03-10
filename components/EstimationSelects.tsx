import {Select, SelectItem} from "@nextui-org/react";
import {gasEstimatorItems, layer2Items} from "@/components/SelectContent";
import {GasActionItem, L2SelectItem} from "@/types";
import React from "react";

export default function EstimationSelects(props: { setSelectedItem: any,  handleLayer2Select: (selectedItem: string) => void}) {
    return (
        <>
            <Select
                items={gasEstimatorItems}
                label="Select transaction type"
                placeholder="Choose item"
                className="max-w-full p-2"
                defaultSelectedKeys={["swap"]}
                onChange={(selectedItem) => props.setSelectedItem(selectedItem.target.value)}
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
                    props.handleLayer2Select(selectedItem.target.value)
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
