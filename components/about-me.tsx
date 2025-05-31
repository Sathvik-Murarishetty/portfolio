import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AboutContact } from "./about-contact";
import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import { AboutInfo } from "./about-info";
import { TechStack } from "./tech-stack"

export function AboutMe() {
    return (
        <BentoGrid className="max-w-4xl mx-auto">
            <BentoGridItem className="md:col-span-4">
                <AboutInfo />
            </BentoGridItem>
            <BentoGridItem className="md:col-span-2">
                <div className="flex items-center justify-center antialiased">
                    <GlowingStarsBackgroundCard>
                        <div className="flex justify-between items-end">
                            <GlowingStarsDescription>
                                The Inside Scoop
                            </GlowingStarsDescription>
                        </div>
                        <GlowingStarsTitle>Currently building RAG and Multi-Modal Agents</GlowingStarsTitle>
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
    );
}