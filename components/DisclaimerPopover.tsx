import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {Spacer} from "@nextui-org/react";
import React from "react";

export default function DisclaimerPopover() {
    return (
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
                            The L1 estimate is calculated by multiplying the base fee + priority fee with the gas limit of the transaction type,
                            meaning this is the maximum possible gas fee.
                            <Spacer y={2}/>
                            The L2 estimate is taken directly from CryptoStats - each L2 transfer pays gas on L2 and then again on L1 to write
                            the batched data, meaning it can&apos;t be calculated the same way as on L1.
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}
