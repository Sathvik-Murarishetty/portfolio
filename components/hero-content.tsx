"use client";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function HeroContent() {
    const words = ["Full-Stack Web Developer", "Machine Learning Engineer", "LLM & Backend Systems Developer", "Mobile App Developer", "AI & Robotics Engineer"];

    return (
        <div className="flex justify-center items-center px-4">
            <div className="mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                <div className="text-5xl font-bold text-neutral-100">
                    Hi,
                    <PointerHighlight
                        rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                        pointerClassName="text-yellow-500"
                    >
                        <span className="relative z-10">I’m Sathvik 👋</span>
                    </PointerHighlight><br />
                </div>
                <div className="text-3xl">
                    I am a  <FlipWords words={words} /> <br />
                </div>
                <div className="text-2xl">
                    I build intelligent systems, modern apps, and AI tools that scale 🚀
                </div>
                <div className="pt-5 flex text-center">
                    <a
                        href="/Resume_Sathvik_Murarishetty.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-md text-xl dark:text-white flex items-center space-x-2"
                        >
                            <span>Download Resume</span>
                        </HoverBorderGradient>
                    </a>
                </div>
            </div>
        </div>
    );
}
