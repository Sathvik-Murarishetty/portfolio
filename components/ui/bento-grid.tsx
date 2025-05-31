import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-6", className)}>
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "group/bento row-span-1 flex flex-col justify-between rounded-xl border  p-4 transition duration-200 hover:shadow-xl border-white/[0.2] bg-black shadow-none",
                className
            )}
        >
            {children}
        </div>
    );
};