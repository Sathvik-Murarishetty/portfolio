import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AboutContact } from "./about-contact";
import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import { AboutInfo } from "./about-info";
import { TechStack } from "./tech-stack";

export function AboutMe() {
    return (
        <div className="max-w-5xl mx-auto px-4 md:px-8">

            <div className="mb-10 text-center">
                <h2 className="text-2xl md:text-5xl mb-6 text-white max-w-4xl font-bold">
                    About Me
                </h2>
            </div>

            <BentoGrid className="max-w-4xl mx-auto">
                <BentoGridItem className="md:col-span-4">
                    <AboutInfo />
                </BentoGridItem>
                <BentoGridItem className="md:col-span-2">
                    <div className="flex items-center justify-center antialiased">
                        <GlowingStarsBackgroundCard>
                            <div className="flex justify-between items-end">
                                <GlowingStarsDescription>The Inside Scoop</GlowingStarsDescription>
                            </div>
                            <GlowingStarsTitle>
                                Currently building RAG and Multi-Modal Agents
                            </GlowingStarsTitle>
                        </GlowingStarsBackgroundCard>
                    </div>
                </BentoGridItem>
                <BentoGridItem className="md:col-span-2">
                    <AboutContact />
                </BentoGridItem>
                <BentoGridItem className="md:col-span-4">
                    <TechStack />
                </BentoGridItem>
            </BentoGrid>
        </div>
    );
}