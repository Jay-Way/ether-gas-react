import React from "react";

export default function AboutFooter() {
  return (
    <div className="relative justify-center">
      <div className="mt-4 text-xs text-center text-gray-500">
        Made with Next.js, Next-UI, TanStack and Typescript. Deployed via
        cloudfront + s3.
      </div>
      <div className="mt-4 text-xs text-center text-gray-500">
        <div className="underline">
          <a target="_blank" href="https://github.com/Jay-Way/ether-gas-react">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
