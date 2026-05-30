"use client";

import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  text: string;

  showDot?: boolean;
  showBorder?: boolean;

  className?: string;

  textColor?: string;
  borderColor?: string;
  dotColor?: string;
  backgroundColor?: string;
}

export default function SectionBadge({
  text,
  showDot = true,
  showBorder = true,
  className,
  textColor = "text-[#8A7650]",
  borderColor = "border-[#8A7650]/20",
  dotColor = "bg-[#8A7650]",
  backgroundColor = "bg-transparent",
}: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em]",
        textColor,
        backgroundColor,
        showBorder && "border",
        showBorder && borderColor,
        className
      )}
    >
      {showDot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full shrink-0",
            dotColor
          )}
        />
      )}

      {text}
    </div>
  );
}