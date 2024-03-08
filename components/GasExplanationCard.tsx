import { Card, CardBody, CardHeader, Spacer } from "@nextui-org/react";
import React from "react";

export default function GasExplanationCard() {
  return (
    <Card className=" mt-6">
      <CardHeader>
        <div className="text-small text-gray-400">What does this mean?</div>
      </CardHeader>
      <CardBody>
        <div className="text-xl">
          Every transaction on Ethereum consumes a specific amount of computing
          power, called <strong>gas</strong>.
        </div>
        <Spacer y={4} />
        <div className="text-large">
          The gas limit, multiplied by the current gas price results in the
          maximum cost of your tx. Keep in mind that usually not all of the gas
          is used.
        </div>
        <Spacer y={4} />
        <div className="text-large">
          That means{" "}
          <strong>
            depending on what you&apos;re doing your expected fee varies.
          </strong>
        </div>
        <Spacer y={4} />
        <div className="text-large">
          But usually you can <strong>save money by using a L2!</strong>
        </div>
        <Spacer y={4} />
        <div className="text-large">Check out at these examples:</div>
      </CardBody>
    </Card>
  );
}
