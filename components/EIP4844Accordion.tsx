import { Spacer } from "@nextui-org/react";
import React from "react";
import AccordionCard from "@/components/AccordionCard";
import {Link} from "@nextui-org/link";
import { useTranslation} from 'react-i18next';

export default function EIP4844Accordion() {
  const {t} = useTranslation();
  const content = (
    <>
      <div>
          On March 13 2024 the Dencun upgrade activated on Ethereum. This update contained <Link target="_blank" href="https://www.eip4844.com/">EIP-4844</Link>
          {' '}which allows for so called Blobs - additional data for transactions - which can be written to L1 for less gas and are removed automatically after a certain timeframe.
        <Spacer y={4} />
          This enables L2s to be more cost efficient, allowing sub-cent transaction costs.
      </div>
      <Spacer y={4} />
        Support for these new blob transactions has to be enabled on L2s, which is expected to happen soon after the Dencun upgrade, depending on the L2.
    </>
  );
  return <AccordionCard title="What are Blobs / EIP-4844?" text={content} />;
}
