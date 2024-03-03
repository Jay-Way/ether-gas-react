import {Spacer} from "@nextui-org/react";
import React from "react";
import AccordionCard from "@/components/AccordionCard";

export default function L2ExplanationAccordion() {
    const content = <>
        <p>
            L2s come in many forms, we&apos;re talking about rollups here.
            Rollups work by processing transactions on layer 2, but sending data to layer 1. This allows transactions to be much faster and cheaper, but still benefit from the security of the Ethereum mainnet.
            <Spacer y={8}/>
            There are two types of rollups: optimistic rollups and zero knowledge (ZK) rollups.
            <Spacer y={8}/>
            - Optimistic rollups: Layer 1 assumes transactions are valid by default, and the validity of the transaction is computed only when challenged.
            <Spacer y={8}/>
            - ZK rollups: Proof of the validity of transactions is computed on layer 2 and submitted to layer 1.
        </p>
    </>

    return (
        <AccordionCard title={'So what even is a L2?'} text={content}/>
    )
}
