import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import React from "react";
import { useToggle } from "usehooks-ts";

export default function AccordionCard(props: { title: string; text: any }) {
  const [open, toggleOpen] = useToggle(true);
  return (
    <Card className="mt-6">
      <Accordion onSelectionChange={toggleOpen}>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={
            <span>
              <strong>{props.title}</strong>
            </span>
          }
          subtitle={
            !open ? "" : <div className="text-xs text-gray-400">(Expand)</div>
          }
        >
          {props.text}
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
