"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function AboutInfo() {
    const code = 
    `const AboutMeComponent = () => {
  const [skillsUnlocked, setSkillsUnlocked] = React.useState(0);
  
  return (
    <div>
        Hey there! I’m Sathvik Murarishetty,
        a Computer Science undergrad from MIT Bengaluru.

        I’m passionate about building intelligent systems,
        whether it’s full-stack web & mobile apps, 
        machine learning models, or AI-powered robotics.

        When I’m not coding, you’ll find me travelling,
        playing cricket, or learning new stuff.
    </div>
    );
};`;

    return (
        <div className="max-w-3xl mx-auto w-full">
            <CodeBlock
                language="jsx"
                filename="about-me.jsx"
                highlightLines={[6, 9, 13]}
                code={code}
            />
        </div>
    );
}