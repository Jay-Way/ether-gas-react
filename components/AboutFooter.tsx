import React from "react";
import {githubLogo} from "@/components/logos/logos";
import {Button} from "@nextui-org/react";

export default function AboutFooter() {
  return (
    <div className="flex justify-center items-center h-full pt-4">
      <Button size="sm" endContent={githubLogo} onClick={() => window.open("https://github.com/Jay-Way/ether-gas-react")}>GitHub</Button>
    </div>
  );
}
