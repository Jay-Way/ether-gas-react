import {Accordion, AccordionItem, Card, Spacer} from "@nextui-org/react";
import React from "react";
import { useToggle } from 'usehooks-ts'

export default function AccordionCard() {
    const [open, toggleOpen] = useToggle(true)
    return (
        <Card className="mt-6">
            <Accordion onSelectionChange={toggleOpen}>
                <AccordionItem key="1" aria-label="Accordion 1" title={
                    <span>
                        <strong>Geez fine! So how do I get on L2?</strong>
                    </span>
                } subtitle={!open ? '' : <div className="text-xs text-gray-400">(Expand)</div>}>
                    <p>
                        There are many ways to get your funds to a layer 2. Most big exchanges support at least one Ethereum Layer 2, for
                        example
                        you can use Coinbase or Kraken to move your funds to a L2 like Arbitrum for low costs.
                    </p>
                    <Spacer y={8}/>
                    <p>
                        When you&apos;re using a EVM (Ethereum virtual machine) compatible L2 like Arbitrum you automatically control the L2 address with your L1 private key.
                        That means you can just use the same wallet as on L1.
                    </p>
                    <Spacer y={8}/>
                    <p>WIP</p>
                </AccordionItem>
            </Accordion>
        </Card>
    )
}
