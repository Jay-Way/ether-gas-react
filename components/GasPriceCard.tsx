import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Spacer,
  Spinner,
} from "@nextui-org/react";
import React from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { refetchInterval } from "@/components/mainCard";
import { fromWei } from "@/components/utils/converter";
import {useTranslation} from "react-i18next";

export default function GasPriceCard(props: {
  gasOracleQuery: UseQueryResult<any>;
}) {
  const {t} = useTranslation();
  return (
    <Card className="mt-6">
      <CardHeader className="flex gap-3">
        <Image
          alt="ethereum logo"
          radius="sm"
          src="https://ethereum.org/de/_next/static/media/eth-diamond-rainbow.bb509e8a.png"
          width={20}
        />
        <div className="">
          <span className="text-xs text-default-500">
            {t('gasPriceCard.dataHint')}
          </span>
          <div className="text-xs text-default-500">
            {t('gasPriceCard.refreshHint', {seconds: refetchInterval / 1000})}
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="text-2xl">
          {t('gasPriceCard.l1GasPrice')}
          <div className="inline text-3xl bg-gradient-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            {props.gasOracleQuery.isLoading ? (
              <Spinner color="default" labelColor="foreground" />
            ) : (
              Math.trunc(fromWei(props.gasOracleQuery?.data.result))
            )}{" "}
            Gwei{" "}
          </div>
          {t('gasPriceCard.rightNow')}
        </div>
        <Spacer y={8} />
        <div className="text-2xl">
          {t('gasPriceCard.useL2')}
        </div>
      </CardBody>
    </Card>
  );
}
