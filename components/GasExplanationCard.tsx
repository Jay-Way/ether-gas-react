import { Card, CardBody, CardHeader, Spacer } from "@nextui-org/react";
import React from "react";
import {useTranslation} from "react-i18next";

export default function GasExplanationCard() {
  const {t} = useTranslation();
  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="text-small text-gray-400">{t('gasExplanationCard.title')}</div>
      </CardHeader>
      <CardBody>
        <div className="text-large">
          {t('gasExplanationCard.first')}
        </div>
        <Spacer y={4} />
        <div className="text-large">
          {t('gasExplanationCard.second')}
        </div>
        <Spacer y={4} />
        <div className="text-large">
          {t('gasExplanationCard.third')}
        </div>
        <Spacer y={4} />
        <div className="text-large font-bold">
          {t('gasExplanationCard.fourth')}
        </div>
        <Spacer y={4} />
        <div className="text-large">
          {t('gasExplanationCard.fifth')}
        </div>
      </CardBody>
    </Card>
  );
}
