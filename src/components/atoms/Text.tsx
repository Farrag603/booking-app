import React from "react";

import {
  PRIMARY_COLORS,
  SECONDARY_COLORS,
  NEUTRAL_COLORS,
} from "@/constants/colors";

type TextVariant =
  | "body-1"
  | "body-bold-1"
  | "body-2"
  | "body-bold-2"
  | "caption-1"
  | "caption-bold-1"
  | "caption-2"
  | "caption-bold-2"
  | "hairline-1"
  | "hairline-2"
  | "button-1"
  | "button-2";

type TextAlign = "left" | "center" | "right" | "justify";

const COLOR_TOKENS = {
  ...PRIMARY_COLORS,
  ...SECONDARY_COLORS,
  ...NEUTRAL_COLORS,
};

type ColorToken = keyof typeof COLOR_TOKENS;

type TextProps = {
  variant?: TextVariant;
  align?: TextAlign;
  colorToken?: ColorToken;
  truncate?: boolean;
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<TextVariant, string> = {
  "body-1": "text-[1.5rem] ",
  "body-bold-1": "text-[1.5rem] font-semibold",
  "body-2": "text-[1rem] ",
  "body-bold-2": "text-[1rem] font-medium",
  "caption-1": "text-[0.875rem] ",
  "caption-bold-1": "text-[0.875rem]  font-medium",
  "caption-2": "text-[0.75rem] ",
  "caption-bold-2": "text-[0.75rem] font-semibold",
  "hairline-1": "text-[1rem]  uppercase font-bold",
  "hairline-2": "text-[0.75rem]  uppercase font-bold",
  "button-1": "font-bold text-[1rem] ",
  "button-2": "font-bold text-[0.875rem] ",
};

const alignClasses: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

export function Text({
  variant = "body-2",
  align = "left",
  colorToken,
  truncate = false,
  className = "",
  children,
}: TextProps) {
  const resolvedColor = colorToken ? COLOR_TOKENS[colorToken] : undefined;

  const classes =`font-sans ${variantClasses[variant]} ${alignClasses[align]} ${truncate ? "truncate" : ""} ${className}`;


  return (
    <p className={classes} style={{ color: resolvedColor }}>
      {children}
    </p>
  );
}
