"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

interface ProjectPinProps {
    title: string;
    description: string;
    href: string;
    techStack?: string;
    imageUrl?: string; // 👈 New prop
}

export function ProjectPin({
    title,
    description,
    href,
    techStack,
    imageUrl, // 👈 Accepting image URL
}: ProjectPinProps) {
    return (
        <div className="w-full flex items-center justify-center py-6">
            <PinContainer title={href} href={href}>
                <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        {title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500">{description}</span>
                    </div>

                    {/* 🔁 Replacing gradient with image */}
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={`${title} preview`}
                            className="w-full h-full object-cover rounded-lg mt-4"
                        />
                    ) : (
                        <div className="flex flex-1 w-full h-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    )}

                    {techStack && (
                        <p className="text-base mt-3 text-slate-400 italic">{techStack}</p>
                    )}
                </div>
            </PinContainer>
        </div>
    );
}