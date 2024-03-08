import { Spacer } from "@nextui-org/react";
import React from "react";
import AccordionCard from "@/components/AccordionCard";
import {Link} from "@nextui-org/link";

export default function L2OnboardingAccordion() {
  const content = (
    <>
      <div>
        There are many ways to get your funds to a layer 2. Most big exchanges
        support at least one Ethereum Layer 2, for example you can use Coinbase
        or Kraken to move your funds to a L2 like Arbitrum for low costs.
        <Spacer y={4} />
        When you&apos;re using an EVM (Ethereum virtual machine) compatible L2
        like Arbitrum you automatically control the L2 address with your L1
        private key. That means you can just use the same wallet as on L1.
      </div>
      <Spacer y={4} />
      <div>For an overview of the Ethereum L2 ecosystem visit <Link target="_blank" href="https://l2beat.com/scaling/summary">L2Beat</Link></div>
    </>
  );
  return <AccordionCard title={"How do I get on L2?"} text={content} />;
}
