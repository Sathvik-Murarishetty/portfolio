"use client";

import { useState } from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function AboutContact() {
    const [copied, setCopied] = useState(false);
    const email = "murarishettysathvik@gmail.com"; // 🔁 Replace with your actual email

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // reset after 2 sec
        });
    };

    return (
        <CardSpotlight className="h-full w-full flex flex-col items-center justify-center text-center px-6 py-10">
            <p className="text-xl font-bold text-white mb-4 relative z-20">
                Let&apos;s Work Together
            </p>

            <button
                onClick={handleCopy}
                className="bg-white text-black px-4 py-2 rounded-lg font-medium flex items-center gap-2 relative z-20 hover:bg-gray-200 transition"
            >
                {copied ? (
                    <>
                        <CheckIcon />
                        e-mail copied!
                    </>
                ) : (
                    <>
                        <ClipboardIcon />
                        copy e-mail
                    </>
                )}
            </button>
        </CardSpotlight>
    );
}

const ClipboardIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 104 0M9 5h6"
        />
    </svg>
);

const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
        />
    </svg>
);