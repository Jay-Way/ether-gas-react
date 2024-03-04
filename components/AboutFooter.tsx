import React from "react";

export default function AboutFooter() {
    return (
        <div className="relative justify-center">
            <p className="mt-4 text-xs text-center text-gray-500">Made with Next.js, Next-UI, TanStack and Typescript. Deployed via cloudfront
                + s3.
            </p>
            <p className="mt-4 text-xs text-center text-gray-500">
                <a target="_blank" href="https://github.com/Jay-Way/ether-gas-react">
                    <div className="underline">Github</div>
                </a>
            </p>
        </div>
    )
}
