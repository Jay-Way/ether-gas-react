import { Accordion, AccordionItem, Card, Spacer } from "@nextui-org/react";
import React from "react";
import { useToggle } from "usehooks-ts";
import AccordionCard from "@/components/AccordionCard";

export default function L2OnboardingAccordion() {
  const content = (
    <>
      <p>
        There are many ways to get your funds to a layer 2. Most big exchanges
        support at least one Ethereum Layer 2, for example you can use Coinbase
        or Kraken to move your funds to a L2 like Arbitrum for low costs.
        <Spacer y={8} />
        When you&apos;re using an EVM (Ethereum virtual machine) compatible L2
        like Arbitrum you automatically control the L2 address with your L1
        private key. That means you can just use the same wallet as on L1.
      </p>
      <Spacer y={8} />
      <p>WIP</p>
    </>
  );
  return <AccordionCard title={"How do I get on L2?"} text={content} />;
}
