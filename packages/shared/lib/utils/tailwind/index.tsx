import { ComponentProps } from "react";

export type TailwindSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl";

export const classNames = (...classes) => classes.filter(Boolean).join(" ");

export const sizeToDimension = {
  xs: 6,
  sm: 8,
  md: 10,
  lg: 12,
  xl: 16,
  "2xl": 20,
  "3xl": 24,
  "4xl": 28,
  "5xl": 32,
  "6xl": 36,
  "7xl": 40,
};

export const sizeToClassName = (size: TailwindSize) => {
  const test = {
    xs: "h-6 w-6",
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
    "2xl": "h-20 w-20",
    "3xl": "h-24 w-24",
    "4xl": "h-28 w-28",
    "5xl": "h-32 w-32",
    "6xl": "h-36 w-36",
    "7xl": "h-40 w-40",
  };
  return test[size];
};

export type AlertType = "success" | "info" | "error" | "warning";

export type Heroicon = (props: ComponentProps<"svg">) => JSX.Element; // eslint-disable-line
