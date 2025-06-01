"use client";
import React from "react";
import { ProjectPin } from "@/components/project-pin";

interface ProjectData {
    title: string;
    description: string;
    href: string;
    techStack: string;
    imageUrl?: string;
}

const projects: ProjectData[] = [
    {
        title: "Multiagent Finance Assistant",
        description: "Voice-enabled multi-agent financial assistant using RAG and FastAPI.",
        href: "https://github.com/Sathvik-Murarishetty/multiagent-finance-assistant",
        techStack: "FastAPI, Streamlit, RAG, LLMs",
        imageUrl: "/images/multiagent.png",
    },
    {
        title: "Archetype Learning Game Suite",
        description: "Web-based learning game suite for skill enhancement.",
        href: "https://github.com/Sathvik-Murarishetty/archetype-app",
        techStack: "Next.js, TypeScript",
        imageUrl: "/images/archetype.png",
    },
    {
        title: "SelectiveViT: Vision Transformer",
        description: "Improving Vision Transformer interpretability via sparse attention mechanism.",
        href: "https://github.com/Sathvik-Murarishetty/Selective-ViT",
        techStack: "Python, Grad-CAM, Captum",
        imageUrl: "/images/selective-vit.png",
    },
    {
        title: "Central Pharmacy Website",
        description: "A full-stack app to manage prescriptions, inventory, and patient records.",
        href: "https://centralpharmacy.co.in/",
        techStack: "React, Node.js, Express, Postgres SQL",
        imageUrl: "/images/pharmacy.png",
    },
    {
        title: "Laundry Service DBMS",
        description: "Database management system for a laundry service.",
        href: "https://github.com/Sathvik-Murarishetty/Laundry-Database-Managements",
        techStack: "HTML, CSS, PHP, MySQL",
        imageUrl: "/images/laundry.png",
    },
    {
        title: "ML Trading Bot",
        description: "Built an ML-powered bot to automate stock trading decisions.",
        href: "https://github.com/Sathvik-Murarishetty/MLTradingBot",
        techStack: "Python, Machine Learning",
        imageUrl: "/images/trading.png",
    },
    {
        title: "College Predictor Android App",
        description: "Android app that predicts colleges using ML models.",
        href: "https://github.com/Sathvik-Murarishetty/college-prediction-app",
        techStack: "Kotlin, Machine Learning",
    },
    {
        title: "Distributed Systems with Spanning Trees",
        description: "Configured and simulated distributed systems using spanning tree protocols.",
        href: "https://github.com/Sathvik-Murarishetty/Configuration-of-Distributed-Systems-using-Spanning-Trees",
        techStack: "Python, Graph Theory",
        imageUrl: "/images/distributed.png",
    },
    {
        title: "LLM Integration in ROS",
        description: "Integrated Large Language Models with ROS to enhance robotic functionality.",
        href: "https://github.com/Sathvik-Murarishetty",
        techStack: "Python, ROS, LLMs",
    },
];

export const ProjectsGrid = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-white">Projects</h1>
                <p className="text-neutral-400 mt-2 text-xl max-w-xl mx-auto">
                    Here’s a showcase of things I’ve built recently. Everything is open-source and built with love for performance and design.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                {projects.map((project, index) => (
                    <ProjectPin
                        key={index}
                        title={project.title}
                        description={project.description}
                        href={project.href}
                        techStack={`Tech Stack: ${project.techStack}`}
                        imageUrl={project.imageUrl} // ✅ Image passed to pin
                    />
                ))}
            </div>
        </div>
    );
};