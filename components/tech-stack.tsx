import React from "react";
import { TechTooltip } from "./tech-tooltip";

export function TechStack() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 h-full text-center">
      <TechTooltip />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        My Tech Stack
      </h3>
    </div>
  );
}