import { Spacer } from "@nextui-org/react";
import React from "react";
import AccordionCard from "@/components/AccordionCard";
import { useTranslation} from 'react-i18next';

export default function L2ExplanationAccordion() {
  const {t} = useTranslation();
  const content = (
    <>
      <div>
        {t('l2explanation.first')}
        <Spacer y={4} />
        {t('l2explanation.second')}
        <Spacer y={4} />
        {t('l2explanation.third')}
        <Spacer y={4} />
        {t('l2explanation.fourth')}
      </div>
    </>
  );

  return <AccordionCard title={t('l2explanation.accordionTitle')} text={content} />;
}
