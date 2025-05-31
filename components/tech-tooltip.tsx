"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
    {
      id: 1,
      name: "Python",
      designation: "Language",
      image: "/icons/python.jpg",
    },
    {
      id: 2,
      name: "Java",
      designation: "Language",
      image: "/icons/java.jpg",
    },
    {
      id: 3,
      name: "Golang",
      designation: "Language",
      image: "/icons/golang.jpg",
    },
    {
      id: 4,
      name: "Kotlin",
      designation: "Language",
      image: "/icons/kotlin.jpg",
    },
    {
      id: 5,
      name: "Node.js",
      designation: "Backend",
      image: "/icons/nodejs.jpg",
    },
    {
      id: 6,
      name: "FastAPI",
      designation: "Backend",
      image: "/icons/fastapi.jpg",
    },
    {
      id: 7,
      name: "Docker",
      designation: "DevOps",
      image: "/icons/docker.jpg",
    },
    {
      id: 8,
      name: "Git",
      designation: "Tools",
      image: "/icons/git.jpg",
    },
    {
      id: 9,
      name: "PostgreSQL",
      designation: "Database",
      image: "/icons/postgressql.jpg",
    },
    {
      id: 10,
      name: "Next.js",
      designation: "Frontend",
      image: "/icons/nextjs.jpg",
    },
    {
      id: 11,
      name: "Azure",
      designation: "Cloud",
      image: "/icons/azure.jpg",
    },
  ];  

export function TechTooltip() {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}