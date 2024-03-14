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
          On March 13 2024 the Dencun upgrade activated on Ethereum. This update allows L2s to write data to L1 much cheaper than before.
        <Spacer y={4} />
          This allows L2 to be more cost efficient, enabling sub-cent transaction costs.
      </div>
      <Spacer y={4} />
        Support for these new blob transactions has to be enabled on L2s, which is expected to happen soon after the Dencun upgrade.
    </>
  );
  return <AccordionCard title="What are Blobs / EIP-4844?" text={content} />;
}
