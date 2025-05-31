"use client";
import React, { useState, useEffect, ElementType } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

type HoverBorderGradientProps<T extends ElementType> = {
    as?: T;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export function HoverBorderGradient<T extends ElementType = "button">({
    as,
    containerClassName,
    className,
    duration = 1,
    clockwise = true,
    children,
    ...props
}: HoverBorderGradientProps<T>) {
    const Tag = as || "button";

    const [hovered, setHovered] = useState(false);
    const [direction, setDirection] = useState<Direction>("TOP");

    const rotateDirection = (current: Direction): Direction => {
        const dirs: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
        const i = dirs.indexOf(current);
        return clockwise
            ? dirs[(i - 1 + dirs.length) % dirs.length]
            : dirs[(i + 1) % dirs.length];
    };

    const movingMap: Record<Direction, string> = {
        TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    };

    const highlight =
        "radial-gradient(75% 181.2% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                setDirection((prev) => rotateDirection(prev));
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [hovered, duration, clockwise]);

    return React.createElement(
        Tag as ElementType,
        {
            onMouseEnter: () => setHovered(true),
            onMouseLeave: () => setHovered(false),
            className: cn(
                "relative flex rounded-full border content-center hover:bg-black/10 transition duration-500 bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
                containerClassName
            ),
            ...props,
        },
        <>
            <div
                className={cn(
                    "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
                    className
                )}
            >
                {children}
            </div>

            <motion.div
                className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
                style={{
                    filter: "blur(10px)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                }}
                initial={{ background: movingMap[direction] }}
                animate={{
                    background: hovered
                        ? [movingMap[direction], highlight]
                        : movingMap[direction],
                }}
                transition={{ ease: "linear", duration }}
            />

            <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
        </>
    );      
}