import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import React from "react";
import { useToggle } from "usehooks-ts";
import {useTranslation} from "react-i18next";

export default function AccordionCard(props: { title: string; text: any }) {
  const [open, toggleOpen] = useToggle(true);
    const {t} = useTranslation();
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
            !open ? "" : <div className="text-xs text-gray-400">({t('common.expandAccordion')})</div>
          }
        >
          {props.text}
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
