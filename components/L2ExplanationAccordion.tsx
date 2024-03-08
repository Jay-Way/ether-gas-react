import { Spacer } from "@nextui-org/react";
import React from "react";
import AccordionCard from "@/components/AccordionCard";

export default function L2ExplanationAccordion() {
  const content = (
    <>
      <div>
        Layer 2s, or L2s come in many forms, we&apos;re talking about rollups here. Rollups
        work by processing transactions on L2, but sending data to L1 (Ethereum).
        This allows transactions to be much faster and cheaper, but still
        benefit from the security of the Ethereum mainnet.
        <Spacer y={4} />
        There are two types of rollups: optimistic rollups and zero knowledge
        (ZK) rollups.
        <Spacer y={4} />
        - Optimistic rollups: Layer 1 assumes transactions are valid by default,
        and the validity of the transaction is computed only when challenged.
        <Spacer y={4} />- ZK rollups: Proof of the validity of transactions is
        computed on layer 2 and submitted to layer 1.
      </div>
    </>
  );

  return <AccordionCard title={"So, what is a L2?"} text={content} />;
}
