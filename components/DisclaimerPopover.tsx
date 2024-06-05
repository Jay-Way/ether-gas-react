import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {Spacer} from "@nextui-org/react";
import React from "react";
import {useTranslation} from "react-i18next";

export default function DisclaimerPopover() {
    const {t} = useTranslation();
    return (
        <div className="text-center pb-4">
            <Popover>
                <PopoverTrigger>
                    <div className="text-xs pl-2 underline decoration-dotted text-gray-400">
                        {t('disclaimerPopover.title')}
                    </div>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2 w-96">
                        <div className="text-xs text-gray-400">
                            {t('disclaimerPopover.first')}
                            <Spacer y={2}/>
                            {t('disclaimerPopover.second')}
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}
