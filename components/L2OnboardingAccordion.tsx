import { Spacer } from "@nextui-org/react";
import React from "react";
import AccordionCard from "@/components/AccordionCard";
import {Link} from "@nextui-org/link";
import { useTranslation} from 'react-i18next';

export default function L2OnboardingAccordion() {
  const {t} = useTranslation();
  const content = (
    <>
      <div>
          {t('l2onboarding.first')}
        <Spacer y={4} />
          {t('l2onboarding.second')}
      </div>
      <Spacer y={4} />
      <div>{t('l2onboarding.l2beatLink')} <Link target="_blank" href="https://l2beat.com/scaling/summary">L2Beat</Link></div>
    </>
  );
  return <AccordionCard title={t('l2onboarding.accordionTitle')} text={content} />;
}
