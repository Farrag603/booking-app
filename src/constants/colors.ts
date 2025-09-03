// Design tokens for brand colors used across atoms/molecules
// Extend as needed; keys are referenced by bgToken in Input

export const PRIMARY_COLORS = {
  PRIMARY_1: "#1D2E56", // primary brand
  PRIMARY_2: "#243B6B",
  PRIMARY_3: "#2B4780",
} as const;

export const SECONDARY_COLORS = {
  SECONDARY_1: "#32D875", // secondary accent
  SECONDARY_2: "#25B863",
  SECONDARY_3: "#1F9E54",
} as const;

export type PrimaryColorToken = keyof typeof PRIMARY_COLORS;
export type SecondaryColorToken = keyof typeof SECONDARY_COLORS;
