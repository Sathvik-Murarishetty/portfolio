import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experince() {
    const data = [
        {
            title: "Jan 2025 Apr 2025",
            content: (
                <div>
                    <p className="mb-4 text-3xl font-semibold text-white">
                        Data Science Intern at Arya.ai
                    </p>
                    <div className="mb-6 space-y-2 text-base md:text-lg text-neutral-300">
                        <p>Worked with Machine Learning models and the FastAPI framework to design and deploy scalable, high-performance applications.</p>
                        <p>Contributed to building and optimizing data-driven solutions, ensuring seamless integration and improved system performance.</p>
                    </div>
                </div>
            ),
        },
        {
            title: "Jun 2024 Jul 2024",
            content: (
                <div>
                    <p className="mb-4 text-3xl font-semibold text-white">
                        Machine Learning Intern at DRDO
                    </p>
                    <div className="mb-6 space-y-2 text-base md:text-lg text-neutral-300">
                        <p>Developed and integrated Large Language Models (LLMs) within ROS nodes to enhance robotic functionalities.</p>
                        <p>Implemented communication protocols for seamless interaction between LLMs and ROS nodes.</p>
                    </div>
                </div>
            ),
        },
        {
            title: "Nov 2023 Dec 2023",
            content: (
                <div>
                    <p className="mb-4 text-3xl font-semiboldtext-white">
                        IT Intern at Dream Ambassadors
                    </p>
                    <div className="mb-6 text-base md:text-lg text-neutral-300">
                        <p>Worked closely with the IT team to address and resolve technical challenges, providing technical assistance and support for various projects.</p>
                    </div>
                </div>
            ),
        },
        {
            title: "Mar 2023 Apr 2023",
            content: (
                <div>
                    <p className="mb-4 text-3xl font-semibold text-white">
                        IT & Design Intern at VONG
                    </p>
                    <div className="mb-6 text-base md:text-lg text-neutral-300">
                        <p>Assisted in website upkeep, collaborating with the web development team, and created visually appealing graphics using Adobe Creative Suite and other design tools.</p>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}