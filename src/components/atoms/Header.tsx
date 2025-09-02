import React from "react";
import { PRIMARY_COLORS, SECONDARY_COLORS, NEUTRAL_COLORS } from "@/constants/colors";

type HeaderVariant = "hero" | "h1" | "h2" | "h3" | "h4";
type TextAlign = "left" | "center" | "right" | "justify";

// Merge all colors into one object
const COLOR_TOKENS = {
  ...PRIMARY_COLORS,
  ...SECONDARY_COLORS,
  ...NEUTRAL_COLORS,
};

type ColorToken = keyof typeof COLOR_TOKENS;

type HeaderProps = {
  variant?: HeaderVariant;
  align?: TextAlign;
  colorToken?: ColorToken;
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<HeaderVariant, string> = {
  hero: "font-bold text-[4rem] md:text-[5rem] xl:text-[6rem]",
  h1: "font-bold text-[4rem]",
  h2: "font-bold text-[2.5rem] md:text-[3rem]",
  h3: "font-bold text-[2.5rem]",
  h4: "font-bold text-[2rem]",
};

const alignClasses: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

export function Header({
  variant = "h2",
  align = "left",
  colorToken,
  className,
  children,
}: HeaderProps) {
  const Tag = variant === "hero" ? "h1" : variant;

  const resolvedColor = colorToken ? COLOR_TOKENS[colorToken] : undefined;



  return (
    <Tag className={` ${variantClasses[variant]} ${alignClasses[align]} ${className}`} style={{ color: resolvedColor }}>
      {children}
    </Tag>
  );
}
